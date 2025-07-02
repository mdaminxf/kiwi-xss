<?php
// Get the real client IP
$ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';

// Optional: log the IP to a file
file_put_contents("ip_log.txt", date("Y-m-d H:i:s") . " - $ip\n", FILE_APPEND);

// Output the IP (optional)
echo "Your IP: $ip";
?>
