# Architecture

Client -> Registration API -> Device Store
Backend -> Notification Service -> Provider Adapter -> FCM/APNs -> Device

Keep business workflows independent from provider-specific transport.
