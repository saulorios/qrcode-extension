chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
      // URL para gerar o QR Code
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(tab.url)}&size=200x200`;
  
      // Injeta o código na página ativa
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (qrUrl) => {
          // Remove a modal anterior, se existir
          const existingModal = document.getElementById("qr-modal");
          if (existingModal) existingModal.remove();
  
          // Cria a modal
          const modal = document.createElement("div");
          modal.id = "qr-modal";
          modal.style.position = "fixed";
          modal.style.top = "0";
          modal.style.left = "0";
          modal.style.width = "100%";
          modal.style.height = "100%";
          modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          modal.style.display = "flex";
          modal.style.justifyContent = "center";
          modal.style.alignItems = "center";
          modal.style.zIndex = "10000";
  
          // Conteúdo da modal
          const modalContent = document.createElement("div");
          modalContent.style.backgroundColor = "#fff";
          modalContent.style.padding = "20px";
          modalContent.style.borderRadius = "10px";
          modalContent.style.textAlign = "center";
  
          // Imagem do QR Code
          const qrCodeImage = document.createElement("img");
          qrCodeImage.src = qrUrl;
          qrCodeImage.alt = "QR Code"; 
        
            modal.addEventListener('click', (event) => {
                if (event.target === modal) { // Verifica se clicou fora do conteúdo
                    modal.style.display = 'none';
                }
                });
            
          // Montar a modal
          modalContent.appendChild(qrCodeImage);
        //   modalContent.appendChild(closeButton);
          modal.appendChild(modalContent);
          document.body.appendChild(modal);
        },
        args: [qrUrl],
      });
    }
  });