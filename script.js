let freakNumber = localStorage.getItem("freakNumber");
let totalEntries = parseInt(localStorage.getItem("totalEntries") || "0");
const maxEntries = 50;

function toggleFolder(folderId) {
  if (folderId === 'week1') {
    if (!freakNumber && totalEntries < maxEntries) {
      document.getElementById("voting").style.display = "block";
    } else {
      showWaitingRoom();
    }
  }
}

function submitVote() {
  const selected = document.querySelector('input[name="rion"]:checked');
  if (!selected) return alert("Pick your favourite Rion!");

  freakNumber = "FREAK_" + String(totalEntries + 1).padStart(2, '0');
  localStorage.setItem("freakNumber", freakNumber);
  localStorage.setItem("totalEntries", ++totalEntries);

  document.getElementById("voting").style.display = "none";
  showWaitingRoom();
}

function showWaitingRoom() {
  document.getElementById("mainView").classList.add("hidden");
  document.getElementById("waitingRoom").classList.remove("hidden");

  if (totalEntries >= maxEntries) {
    document.getElementById("rewardStatus").classList.add("hidden");
    document.getElementById("audioPlayer").removeAttribute("disabled");
  }
}

function goBack() {
  document.getElementById("waitingRoom").classList.add("hidden");
  document.getElementById("mainView").classList.remove("hidden");
}
