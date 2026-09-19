# Provider Abstraction

Normalize provider differences behind adapters.

Application message -> Provider Adapter -> Provider Payload -> Delivery Result

This allows provider-specific credentials, endpoints, response mapping, and retry rules to remain isolated.
