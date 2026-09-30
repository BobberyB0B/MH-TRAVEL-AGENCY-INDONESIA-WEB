import { BUSINESS_CONFIG } from '../config';

/**
 * Membuka WhatsApp dengan pesan yang sudah di-encode.
 * Kompatibel dengan iPhone Safari, Android Chrome, Firefox, dan Desktop.
 * 
 * @param message Teks pesan yang akan dikirimkan
 * @returns boolean true jika berhasil dipicu
 */
export function openWhatsApp(message: string): boolean {
  try {
    const encodedMessage = encodeURIComponent(message || '');
    const cleanNumber = BUSINESS_CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '');
    const targetUrl = `https://wa.me/${cleanNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;

    // Deteksi jika user berada di perangkat mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Pada mobile Safari dan Chrome, direct navigation paling lancar dan tidak diblokir popup blocker
      window.location.href = targetUrl;
    } else {
      // Pada desktop, buka di tab baru agar user tidak kehilangan halaman
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!win) {
        window.location.href = targetUrl;
      }
    }
    return true;
  } catch (error) {
    console.error('Gagal membuka WhatsApp:', error);
    alert(`WhatsApp tidak dapat dibuka secara otomatis. Silakan hubungi ${BUSINESS_CONFIG.WHATSAPP_DISPLAY}.`);
    return false;
  }
}

/**
 * Menyalin teks ke clipboard dengan dukungan penuh iPhone Safari, Android, dan desktop.
 * Menggunakan navigator.clipboard dengan fallback document.execCommand('copy').
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  // Modern Clipboard API
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Lanjut ke fallback jika gagal
    }
  }

  // Fallback untuk Safari lawas atau konteks non-secure
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
