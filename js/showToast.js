import { Toast } from 'bootstrap';

export function showToast(toastId) {
    const toastElement = document.getElementById(toastId);
    if (toastElement) {
      const toast = new Toast(toastElement);
      toast.show();
    } else {
      console.warn(`Toast 元素 ${toastId} 不存在`);
    }
}