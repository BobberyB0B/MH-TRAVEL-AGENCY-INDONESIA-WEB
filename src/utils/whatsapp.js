import { BUSINESS_CONFIG } from '../config.js';

export function openWhatsApp(message) {
  try {
    const encodedMessage = encodeURIComponent(message || '');
    const cleanNumber = (BUSINESS_CONFIG.WHATSAPP_NUMBER || '6287899804147').replace(/\D/g, '');
    const targetUrl = `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = targetUrl;
    } else {
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!win) {
        window.location.href = targetUrl;
      }
    }
    return true;
  } catch (error) {
    console.error('Gagal membuka WhatsApp:', error);
    alert(`WhatsApp tidak dapat dibuka secara otomatis. Silakan hubungi ${BUSINESS_CONFIG.WHATSAPP_DISPLAY || '087899804147'}.`);
    return false;
  }
}

export async function copyToClipboard(text) {
  if (!text) return false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Continue to fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback salin gagal:', err);
    return false;
  }
}
