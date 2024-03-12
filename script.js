var clickCount = 0;

function revealFeeling() {
  clickCount++;
  var responseDiv = document.getElementById('response');
  responseDiv.style.display = 'block';
  
  switch(clickCount) {
    case 1:
      responseDiv.innerHTML = "na galingan mo palagi sa school";
      break;
    case 2:
      responseDiv.innerHTML = "Malapit kana mag graduate";
      break;
    case 3:
      responseDiv.innerHTML = "I'm so proud of u mygirl";
      break;
    case 4:
        responseDiv.innerHTML = "Good luck, ali!";
        break;
    case 5:
        responseDiv.innerHTML = "kung anjan lang ako manunuod ako sa graduation mo e";
        break;
    case 6:
        responseDiv.innerHTML = "sana maging okay narin yong sitwasyon mo";
        break;
    case 7:
      responseDiv.innerHTML = "galing mo nga e kaya mo yong ganyan nakaka pressure yong ganyan pero ayon ";
      break;
    case 8:
      responseDiv.innerHTML = "with high honor i'm so proud of u!";
      break;
    default:
      responseDiv.innerHTML = "take care always, palagi akong andito para sayo para suportahan ka sa lahat at sa lahat ng bagay andito ako palagi.";
  }
}
