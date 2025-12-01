// Full JSON data ya maswali 50
const quiz = [
  {"id":1,"question":"What is a computer?","answer":"A computer is an electronic device that accepts input, processes it, and produces output or information.","keywords":["electronic","input","output"]},
  {"id":2,"question":"What are the two main characteristics of a computer?","answer":"1. Responds to specific instructions 2. Can execute pre-recorded programs","keywords":["instructions","program"]},
  {"id":3,"question":"What is a workstation computer?","answer":"A powerful, single-user computer with better CPU and monitor quality.","keywords":["workstation","single-user","CPU"]},
  {"id":4,"question":"What is a minicomputer?","answer":"A multi-user computer, supporting 10-100s of users simultaneously.","keywords":["multi-user","minicomputer","users"]},
  {"id":5,"question":"What is a mainframe computer?","answer":"A powerful multi-user system supporting hundreds or thousands of users.","keywords":["mainframe","multi-user","powerful"]},
  {"id":6,"question":"What is a supercomputer?","answer":"An extremely fast computer that can perform hundreds of millions of instructions per second.","keywords":["supercomputer","fast","instructions"]},
  {"id":7,"question":"What is a personal computer (PC)?","answer":"A small, relatively inexpensive computer designed for individual use.","keywords":["personal","PC","single-user"]},
  {"id":8,"question":"What is a desktop computer?","answer":"A non-portable PC designed to stay in one location.","keywords":["desktop","non-portable","PC"]},
  {"id":9,"question":"What is a laptop/notebook?","answer":"A portable personal computer, battery-powered and lightweight.","keywords":["laptop","notebook","portable"]},
  {"id":10,"question":"What is a personal digital assistant (PDA)?","answer":"A handheld device for personal tasks, scheduling, and notes.","keywords":["PDA","handheld","personal tasks"]},
  {"id":11,"question":"What is a tablet computer?","answer":"A flat, portable computer with a touch screen.","keywords":["tablet","portable","touchscreen"]},
  {"id":12,"question":"What is a wearable computer?","answer":"A small computing device worn on the body like a smartwatch or fitness band.","keywords":["wearable","smartwatch","portable"]},
  {"id":13,"question":"What is a cell phone?","answer":"A portable communication device, often with computing functions.","keywords":["cell","phone","mobile","communication"]},
  {"id":14,"question":"What is a general purpose computer?","answer":"A computer that solves a wide variety of problems, e.g., school, office, or hospital tasks.","keywords":["general-purpose","versatile","tasks"]},
  {"id":15,"question":"What is a special purpose computer?","answer":"A computer designed for a specific task, e.g., traffic lights or calculators.","keywords":["special-purpose","specific","task"]},
  {"id":16,"question":"Name main computer parts.","answer":"Keyboard, Mouse, Monitor, CPU, RAM, System Unit.","keywords":["keyboard","mouse","monitor","CPU","RAM"]},
  {"id":17,"question":"How do you connect computer parts?","answer":"Connect monitor and system unit, keyboard, mouse, and power supply.","keywords":["connect","monitor","keyboard","mouse"]},
  {"id":18,"question":"Name some keyboard keys.","answer":"Enter, Delete, Backspace, Space, Shift, Caps Lock, Tab, ESC, Arrow, Function Keys.","keywords":["enter","delete","backspace","space","shift","tab","esc","arrow"]},
  {"id":19,"question":"What does the Enter key do?","answer":"Moves the cursor down one line and to the left margin; processes commands.","keywords":["enter","cursor","process"]},
  {"id":20,"question":"What does the Backspace key do?","answer":"Deletes character to the left of cursor or highlighted text.","keywords":["backspace","delete","cursor"]},
  {"id":21,"question":"What is the Space Bar used for?","answer":"Moves the cursor one space to the right.","keywords":["space","cursor","move"]},
  {"id":22,"question":"What is the Shift key used for?","answer":"To type capital letters or upper characters on keys.","keywords":["shift","capital","upper"]},
  {"id":23,"question":"What does the Caps Lock key do?","answer":"Locks the keyboard to type capital letters; a light indicates it is ON.","keywords":["caps lock","capital","lock"]},
  {"id":24,"question":"What does the Tab key do?","answer":"Moves cursor several spaces forward or navigates to the next field.","keywords":["tab","cursor","navigate"]},
  {"id":25,"question":"What does the ESC key do?","answer":"Cancels a menu, dialog box, or command operation.","keywords":["esc","cancel","menu","dialog"]},
  {"id":26,"question":"What is the purpose of a computer?","answer":"A computer is created to simplify jobs of different types according to user needs.","keywords":["simplify","jobs","user needs"]},
  {"id":27,"question":"Who is the user of a computer?","answer":"The user is the one who commands the computer and tells it what to do.","keywords":["user","commands","computer"]},
  {"id":28,"question":"How does a user provide data to a computer?","answer":"The user enters data using input devices such as keyboard and mouse.","keywords":["input","keyboard","mouse"]},
  {"id":29,"question":"What is the process of entering data into a computer called?","answer":"The process is called data entry.","keywords":["data entry","process"]},
  {"id":30,"question":"What happens after data is processed in a computer?","answer":"The processed data is sent to main memory and can then be output via devices such as monitor or printer.","keywords":["processed","main memory","output"]},
  {"id":31,"question":"Name the steps a computer follows to execute data.","answer":"First, data is entered through input devices. Second, Control Unit sends signals and commands to process data. Third, output devices display results. Lastly, secondary storage stores data permanently.","keywords":["input","control unit","output","secondary storage"]},
  {"id":32,"question":"Name the generations of computers.","answer":"First, Second, Third, Fourth, and Fifth Generations.","keywords":["generations","first","second","third","fourth","fifth"]},
  {"id":33,"question":"What are the main features of first generation computers?","answer":"Vacuum tubes, machine language only, huge size, unreliable, generated a lot of heat.","keywords":["vacuum tubes","machine language","unreliable","heat","size"]},
  {"id":34,"question":"What distinguishes second generation computers?","answer":"Use of transistors, smaller size, less heat, more reliable, supported assembly languages.","keywords":["transistors","smaller","reliable","assembly language"]},
  {"id":35,"question":"What technology was used in third generation computers?","answer":"Integrated Circuits (ICs) were used to make computers smaller, reliable, and efficient.","keywords":["IC","integrated circuits","reliable","efficient"]},
  {"id":36,"question":"What is notable about fourth generation computers?","answer":"They used VLSI circuits, were powerful, compact, portable, and supported personal computers and networks.","keywords":["VLSI","compact","portable","PC","networks"]},
  {"id":37,"question":"What defines fifth generation computers?","answer":"ULSI technology, parallel processing, AI software, advanced interfaces, compact powerful computers.","keywords":["ULSI","AI","parallel processing","compact","powerful"]},
  {"id":38,"question":"Name some types of computers in modern generation.","answer":"Desktop, Laptop, Notebook, Ultrabook, Chromebook.","keywords":["desktop","laptop","notebook","ultrabook","chromebook"]},
  {"id":39,"question":"What is computer hardware?","answer":"Hardware is the equipment that processes data to create information and is controlled by software.","keywords":["hardware","equipment","processes","data"]},
  {"id":40,"question":"What is computer software?","answer":"Software consists of programs that convert data into information and instruct the computer what to do.","keywords":["software","programs","instructions","data"]},
  {"id":41,"question":"Name the two types of software.","answer":"System software and application software.","keywords":["system software","application software"]},
  {"id":42,"question":"What is the function of keyboard and mouse?","answer":"They are input devices used to enter data into the computer system.","keywords":["keyboard","mouse","input"]},
  {"id":43,"question":"What is the CPU and its main parts?","answer":"The CPU executes instructions; main parts are Control Unit (CU) and Arithmetic/Logic Unit (ALU).","keywords":["CPU","control unit","ALU","executes"]},
  {"id":44,"question":"What are examples of output devices?","answer":"Monitor, printer, speakers.","keywords":["output","monitor","printer","speakers"]},
  {"id":45,"question":"What is RAM and ROM?","answer":"RAM is temporary memory, ROM is permanent read-only memory used for firmware.","keywords":["RAM","ROM","memory","storage"]},
  {"id":46,"question":"What is a hard disk used for?","answer":"Permanent storage of data and programs within the system.","keywords":["hard disk","permanent","storage","programs"]},
  {"id":47,"question":"What is data backup?","answer":"Copying and archiving data to restore it in case of loss.","keywords":["backup","copy","restore","data"]},
  {"id":48,"question":"Name types of backup media.","answer":"Magnetic tape, hard disk, optical storage, solid state storage, remote backup service, floppy disk.","keywords":["magnetic tape","hard disk","optical","SSD","remote","floppy"]},
  {"id":49,"question":"How often should backups be run?","answer":"Depends on data change frequency: daily, weekly, monthly, or whenever changes occur.","keywords":["backups","frequency","daily","weekly","monthly"]},
  {"id":50,"question":"Name some devices and peripherals of a computer.","answer":"LCDs, Printer, UPS, HPLC Machines, X-ray Machines, Ultrasound, Public Address System.","keywords":["devices","peripherals","LCD","printer","UPS"]}
];

// Shuffle questions
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledQuiz = shuffle(quiz);
const container = document.getElementById("quiz-container");

shuffledQuiz.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question-block");
  div.innerHTML = `
    <p>${q.question}</p>
    <input type="text" id="answer${index}" placeholder="Type your answer here">
    <div class="feedback" id="feedback${index}"></div>
  `;
  container.appendChild(div);
});

document.getElementById("submit").onclick = function() {
  let score = 0;
  shuffledQuiz.forEach((q, index) => {
    const userAnswer = document.getElementById(`answer${index}`).value.toLowerCase();
    const feedback = document.getElementById(`feedback${index}`);
    const correct = q.keywords.some(keyword => userAnswer.includes(keyword.toLowerCase()));
    if (!userAnswer) {
      feedback.innerHTML = `❌ No answer provided. Correct: ${q.answer}`;
    } else if (correct) {
      feedback.innerHTML = `✅ Correct!`;
      score++;
    } else {
      feedback.innerHTML = `❌ Wrong! Correct: ${q.answer}`;
    }
  });
  document.getElementById("result").innerText = `Your score: ${score} / ${shuffledQuiz.length}`;
};
