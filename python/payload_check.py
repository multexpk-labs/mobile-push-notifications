#!/usr/bin/env python3
import json
import sys

def valid(payload):
    return isinstance(payload, dict) and isinstance(payload.get('title'), str) and bool(payload['title'].strip())

payload = json.load(sys.stdin)
print('valid' if valid(payload) else 'invalid')
