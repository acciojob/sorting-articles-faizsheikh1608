//your JS code here. If required.

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

 const ignoreWords = ["a", "an", "the"];

    // Function to get the sortable version of a string
    function getSortableTitle(title) {
      const words = title.split(" ");
      return ignoreWords.includes(words[0].toLowerCase()) ? words.slice(1).join(" ") : title;
    }

    // Sort bands array based on sortable titles
    const sortedBands = bands.sort((a, b) => {
      const titleA = getSortableTitle(a).toLowerCase();
      const titleB = getSortableTitle(b).toLowerCase();
      return titleA.localeCompare(titleB);
    });

    // Render sorted articles in the unordered list
    const ul = document.getElementById("band");
    sortedBands.forEach((band) => {
      const li = document.createElement("li");
      li.textContent = band;
      ul.appendChild(li);
    });