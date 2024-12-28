//your JS code here. If required.
const ulEle = document.querySelector('#band');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
 
 const ignoreWords = ["a", "an", "the"];

    // Function to remove ignored words for sorting
    function removeIgnoredWords(title) {
      return title
        .toLowerCase()
        .replace(/^(a |an |the )/i, ""); // Removes "a ", "an ", or "the " at the beginning
    }

    // Sorting the articles
    const sortedArticles = bands.sort((a, b) => {
      const titleA = removeIgnoredWords(a);
      const titleB = removeIgnoredWords(b);
      return titleA.localeCompare(titleB);
    });

sortedArticles.forEach((ele) => {
	const li = document.createElement('li')
	li.textContent  = ele;
	ul.appendChild(li)
})
