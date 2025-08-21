   function validarCookie() {
      const rawCookie = document.getElementById("cookie").value.trim();
      if (!rawCookie) {
        alert("Por favor pega una cookie.");
        return;
      }

      const encodedCookie = encodeURIComponent(rawCookie.replace(/\n/g, " "));
      const proxy = 'https://api.allorigins.win/raw?url=';
      const url = `${proxy}https://centralabobora.shop/api.php?validate_cookie=${encodedCookie}`;

      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.textContent = " Validando cookie...";
      document.getElementById("status-info").textContent = "Validando...";

      fetch(url)
        .then(res => res.text())
        .then(data => {
          if (data.toLowerCase().includes("reprovada")) {
            resultadoDiv.innerHTML = ` <strong>Cookie Inválida</strong><br><pre>${data}</pre>`;
            document.getElementById("status-info").textContent = "Cookie Inválida";
          } else {
            resultadoDiv.innerHTML = ` <strong>Cookie Válida</strong><br><pre>${data}</pre>`;
            document.getElementById("status-info").textContent = "Cookie Válida";
          }
        })
        .catch(err => {
          resultadoDiv.textContent = `Error al validar:\n${err}`;
          document.getElementById("status-info").textContent = "Error en validación";
        });
    }

    function copiarResultado() {
      const resultado = document.getElementById("resultado");
      navigator.clipboard.writeText(resultado.innerText)
        .then(() => alert("Resultado copiado al portapapeles"))
        .catch(err => alert("Error al copiar: " + err));
    }

    function descargarCookie() {
      const cookie = document.getElementById("cookie").value;
      if (!cookie) {
        alert("No hay cookie para guardar");
        return;
      }
      
      const blob = new Blob([cookie], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "cookie_backup.txt";
      a.click();
      URL.revokeObjectURL(url);
    }
