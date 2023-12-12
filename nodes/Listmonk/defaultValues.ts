export const defaultSettings = {
    "app.site_name": "string",
    "app.root_url": "string",
    "app.logo_url": "string",
    "app.favicon_url": "string",
    "app.from_email": "string",
    "app.notify_emails": [
      "string"
    ],
    "app.enable_public_subscription_page": true,
    "app.enable_public_archive": true,
    "app.send_optin_confirmation": true,
    "app.check_updates": true,
    "app.lang": "string",
    "app.batch_size": 0,
    "app.concurrency": 0,
    "app.max_send_errors": 0,
    "app.message_rate": 0,
    "app.message_sliding_window": true,
    "app.message_sliding_window_duration": "string",
    "app.message_sliding_window_rate": 0,
    "privacy.individual_tracking": true,
    "privacy.unsubscribe_header": true,
    "privacy.allow_blocklist": true,
    "privacy.allow_preferences": true,
    "privacy.allow_export": true,
    "privacy.allow_wipe": true,
    "privacy.exportable": [
      "string"
    ],
    "privacy.domain_blocklist": [
      {}
    ],
    "upload.provider": "string",
    "upload.filesystem.upload_path": "string",
    "upload.filesystem.upload_uri": "string",
    "upload.s3.url": "string",
    "upload.s3.public_url": "string",
    "upload.s3.aws_access_key_id": "string",
    "upload.s3.aws_default_region": "string",
    "upload.s3.bucket": "string",
    "upload.s3.bucket_domain": "string",
    "upload.s3.bucket_path": "string",
    "upload.s3.bucket_type": "string",
    "upload.s3.expiry": "string",
    "smtp": [
      {
        "uuid": "string",
        "enabled": true,
        "host": "string",
        "hello_hostname": "string",
        "port": 0,
        "auth_protocol": "string",
        "username": "string",
        "email_headers": [
          {}
        ],
        "max_conns": 0,
        "max_msg_retries": 0,
        "idle_timeout": "string",
        "wait_timeout": "string",
        "tls_type": "string",
        "tls_skip_verify": true
      }
    ],
    "messengers": [
      {}
    ],
    "bounce.enabled": true,
    "bounce.webhooks_enabled": true,
    "bounce.count": 0,
    "bounce.action": "string",
    "bounce.ses_enabled": true,
    "bounce.sendgrid_enabled": true,
    "bounce.sendgrid_key": "string",
    "bounce.postmark_enabled": true,
    "bounce.postmark_username": "string",
    "bounce.postmark_password": "string",
    "bounce.mailboxes": [
      {
        "uuid": "string",
        "enabled": true,
        "type": "string",
        "host": "string",
        "port": 0,
        "auth_protocol": "string",
        "return_path": "string",
        "username": "string",
        "tls_enabled": true,
        "tls_skip_verify": true,
        "scan_interval": "string"
      }
    ],
    "appearance.admin.custom_css": "string",
    "appearance.admin.custom_js": "string",
    "appearance.public.custom_css": "string",
    "appearance.public.custom_js": "string"
}

export const defaultEmailTest = {
    "uuid": "string",
    "enabled": true,
    "host": "string",
    "hello_hostname": "string",
    "port": 0,
    "auth_protocol": "string",
    "username": "string",
    "email_headers": [
      {}
    ],
    "max_conns": 0,
    "max_msg_retries": 0,
    "idle_timeout": "string",
    "wait_timeout": "string",
    "tls_type": "string",
    "tls_skip_verify": true,
    "strEmailHeaders": "string",
    "password": "string",
    "email": "string"
  }