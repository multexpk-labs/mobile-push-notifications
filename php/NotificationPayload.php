<?php

declare(strict_types=1);

final class NotificationPayload
{
    public static function validate(array $payload): void
    {
        if (empty($payload['title']) || !is_string($payload['title'])) {
            throw new InvalidArgumentException('A notification title is required.');
        }
    }
}
