export function normalizeNotification(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new TypeError('Notification payload must be an object');
  }

  return {
    title: String(payload.title || ''),
    body: String(payload.body || ''),
    data: payload.data && typeof payload.data === 'object' ? payload.data : {}
  };
}
