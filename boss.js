function fetchDataFromeServer() {
  const waitingTime = 3100;
  const maxNeeded = 100;
  const startTimestamp = new Date().getTime();
  let ul = $('.chat-message-ul')[0];
  if (ul == undefined) {
    throw new Error('no chart list found!');
  }
  function scrollToTop() {
    if (ul.children[0]) {
      console.log('into view', ul.children[0]);
      ul.children[0].scrollIntoView();
    }
  }
  function continuousFetchData() {
    if (ul.childElementCount < maxNeeded && new Date().getTime() - waitingTime < startTimestamp) {
      console.log('fetch data');
      scrollToTop();
      setTimeout(continuousFetchData, 1000);
    }
  }
  continuousFetchData();
}
function getChatListInfos() {
  let ul = $('.chat-message-ul')[0];
  if (ul == undefined) {
    throw new Error('no chart list found!');
  }
  function paserItem(li) {
    const cls = li.classList;
    return {
      type: li.getAttribute('type'),
      source: cls.contains('item-friend') ? 'friend' : cls.contains('item-myself') ? 'myself' : 'system',
      text: li.querySelector('.text').textContent,
      status: cls.value.split('status-')[1],
      timestamp: li.getAttribute('timestamp')
    };
  }
  return Array.from(ul.children)
    .map(function (li) {
      return paserItem(li);
    })
    .reverse();
}
