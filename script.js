document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.querySelector("button");

    const dataset = {
        // English Responses
        "hello": "Hello! How can I assist you today?",
        "how are you": "I'm just a chatbot, but I'm functioning as expected!",
        "what is javascript": "JavaScript is a programming language used to create interactive effects within web browsers.",
        "who created you": "I am NOVA, a chatbot developed to assist users with their queries.",
        "goodbye": "Goodbye! Have a great day!",
        
        // Programming Languages (English & Sinhala)
        "what is python": "Python is a high-level programming language known for its readability and versatility.",
        "python kiyanna": "Python kiyanne godak sapekshawa pahasu programming bhashaawak.",
        "what is java": "Java is a widely-used programming language designed for cross-platform compatibility.",
        "java kiyanna": "Java kiyanne saralawa wenas platform wala wada karanna puluwan programming bhashaawak.",
        "what is c++": "C++ is an extension of the C programming language with object-oriented features.",
        "c++ kiyanna": "C++ kiyanne object-oriented gunadharma thiben C bhashaawa ekata wenasak." ,
        
        // Countries (English & Sinhala)
        "what is sri lanka": "Sri Lanka is an island nation in South Asia known for its rich culture and heritage.",
        "sri lanka kiyanna": "Sri Lanka kiyanne dakunu aasiyawe theewu rajyakwak saha sampradayika urumaya atara godak samruddha ratak.",
        "what is india": "India is a South Asian country known for its diverse culture and history.",
        "india kiyanna": "India kiyanne vividha sanskruthika aithihasika maathru bhumiyak lesa prakasitha ratak.",
        "what is usa": "The United States of America is a North American country known for its global influence.",
        "usa kiyanna": "USA kiyanne lokaye godak wedanathmaka deshapalana saha arthika prabhaawa thibena ratak. ",
        
        // Famous Places in Sri Lanka (English & Sinhala)
        "what is sigiriya": "Sigiriya is an ancient rock fortress and UNESCO World Heritage site in Sri Lanka.",
        "sigiriya kiyanna": "Sigiriya kiyanne lankawedi UNESCO urumaya lesa prakasitha purana gala kotuwa.",
        "what is temple of the tooth": "The Temple of the Tooth in Kandy houses the sacred tooth relic of Buddha.",
        "dalada maligawa kiyanna": "Dalada Maligawa kiyanne kandy nagaraye stithawa siduhath samindu ge dath daanaya sthitha thanayak.",
        "what is galle fort": "Galle Fort is a historic fortification built by the Portuguese and later expanded by the Dutch in Sri Lanka.",
        "galle fort kiyanna": "Galle kotuwa kiyanne purana Portuguese soya Dutch pamaana samaga vikashitha kotuwa." ,
        
        // Additional Developed Countries
        "what is japan": "Japan is an island nation in East Asia known for its technology and culture.",
        "japan kiyanna": "Japan kiyanne naveena prasadana saha sampradayika urumaya eheyuththeema thanak wemi theewu rajyakwak. ",
        "what is germany": "Germany is a European country known for its engineering, economy, and history.",
        "germany kiyanna": "Germany kiyanne utum yanthrika prasadana saha samaga deshapalana itihasayata prasidda ratak."
    };

    function sendMessage() {
        const message = userInput.value.trim().toLowerCase();
        if (message === "") return;
        
        appendMessage("You", message);
        userInput.value = "";
        
        setTimeout(() => {
            const botReply = dataset[message] || "I'm not sure how to respond to that. Can you ask something else? / මට මේ ගැන පිළිතුරු දෙන්න බෑ. කරුණාකර වෙනත් ප්‍රශ්නයක් අසන්න.";
            appendMessage("NOVA", botReply);
        }, 1000);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
