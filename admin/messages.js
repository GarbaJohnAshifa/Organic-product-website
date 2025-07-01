// Sample messages
const messages = [
    {
      name: "Lilian B.",
      email: "lilian@example.com",
      content: "Can I mix the pawpaw oil with shea butter?",
      received: "2025-06-24"
  },
    {
      name: "Ahmed K.",
      email: "ahmed.k@example.com",
      content: "Do you ship to Europe?",
      received: "2025-06-22"
  },
    {
      name: "Nicole D.",
      email: "nicole.d@example.com",
      content: "Loved the carrot oil! Ordering again soon.",
      received: "2025-06-21"
  }
  ];
  
  const messageTable = document.getElementById("messageTableBody");
  
  function loadMessages() {
    messageTable.innerHTML = "";
  
    messages.forEach(msg => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.content}</td>
        <td>${msg.received}</td>
      `;
      messageTable.appendChild(row);
  });
  }
  
  loadMessages();
  