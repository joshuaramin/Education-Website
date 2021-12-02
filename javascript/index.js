(async function name() {
  const article = document.querySelector("article");
  const container = document.getElementById("container");
  const req = await fetch("/json/js.json");
  const res = await req.json();

  const aside = document.createElement("aside");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  container.appendChild(aside);

  div.className = "title";
  div.id = "title";
  h2.className = "headingTwo";
  h2.id = "headingTwo";
  p.className = "paragraph";
  p.id = "paragraph";
  nav.className = "js";
  nav.id = "js";

  aside.appendChild(nav);
  nav.appendChild(ul);
  article.appendChild(div);
  div.append(h2);
  div.append(p);

  h2.innerHTML = res.about.title;
  p.innerHTML = res.about.description;

  for (let type in Object.keys(res.types)) {
    //creating an element
    const li = document.createElement("li");
    const Link = document.createElement("a");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const video = document.createElement("iframe");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tableRow = document.createElement("tr");

    //Append child and append
    ul.appendChild(li);
    li.appendChild(Link);
    article.append(div);
    div.append(h2);
    div.append(video);
    div.append(table);
    table.append(tbody);

    Link.innerHTML = res.types[type].title;
    Link.href = window.location.href = `#${res.types[type].title}`;
    div.className = res.types[type].title;
    div.id = res.types[type].title;

    //defining the class and id
    li.className = "li";
    li.id = "li";
    table.className = "table";
    table.id = "table";
    h2.className = "js-h2";
    h2.id = "js-h2";
    Link.className = "js-a";
    Link.id = 'js-a'
    //iframe configure
    video.width = "700";
    video.height = "415";
    video.allowFullscreen = true;
    video.title = "Youtube Player";
    video.frameBorder = "0";
    video.autoplay = true;

    h2.innerHTML = res.types[type].title;

    video.src = res.types[type].video;

    //looping tables
    const codes = res.types[type].code;
    const headers = ["Code", "Use"];

    headers.forEach((header) => {
      const headers = document.createElement("th");
      headers.className = "tableHeader";
      headers.id = "tableHeader";
      const textNode = document.createTextNode(header);
      headers.appendChild(textNode);
      tableRow.append(headers);
    });
    tbody.appendChild(tableRow);

    Object.keys(codes).forEach((key, value) => {
      tableRow.className = "tableRow";
      tableRow.id = "tableRow";
      tbody.insertAdjacentHTML(
        "beforeend",

        ` <tr class="tableRow id="tableRow">
          <td>${key}</td>
          <td>${codes[key]}</td>
        </tr>`
      );
    });
  }
})();
