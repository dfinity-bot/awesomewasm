;(function() {


  function Search(titleSelector, blockSelector, hideByDefault) {
    var db = Array.prototype.map.call(document.querySelectorAll(titleSelector), function(el) { return el.innerText.toLowerCase().trim() });
    var elements = document.querySelectorAll(blockSelector);
    console.log(titleSelector, blockSelector);
    
    this.onInput = function(term) {
      var resultCount = 0;
      db.forEach(function(text, i) {
        if (term.length == 0) {
          return elements[i].style.display = hideByDefault ? 'none' : '';
        }
        if (text.indexOf(term) !== -1) {
          elements[i].style.display = '';
          resultCount++;
        } else {
          elements[i].style.display = 'none';
        }
      });

      return resultCount;
    }
  }

  var postSearch = new Search('.post-list-item-title', '.post-list-item',  true);
  var tagSearch = new Search('.tag-list-item', '.tag-list-item-container', false);
  var input = document.querySelector('.search input');
  var noResults = document.querySelector('.no-results');
  input.addEventListener('input', processInputChange);

  if (input.value.length  > 0) processInputChange();

  function processInputChange() {
    var term = input.value.toLowerCase().trim();
    var postResultCount = postSearch.onInput(term);
    var tagResultCount = tagSearch.onInput(term);

    if (postResultCount + tagResultCount == 0) {
      noResults.style.display = '';
    } else {
      noResults.style.display = 'none';
    }

    // document.querySelectorAll('.result-header').forEach(function(el) {
    //     el.style.display = term.length == 0 ? 'none' : '';
    //   })
  }

}());