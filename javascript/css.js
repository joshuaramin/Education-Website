(async function css() {
  const req = await fetch("/json/css.json");
  const res = await req.json();
  const article = document.querySelector("article");
  const container = document.getElementById("container");

  const aside = document.createElement("aside");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  nav.className = "css-nav";
  nav.id = "css-nav";

  article.appendChild(div);
  div.appendChild(h2);
  div.appendChild(p);
  container.appendChild(aside);
  aside.appendChild(nav);
  nav.append(ul);

  h2.innerHTML = res.about.title;
  p.innerHTML = res.about.description;

  for (let type of Object.keys(res.types)) {
    const li = document.createElement("li");
    const Link = document.createElement("a");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tableRow = document.createElement("tr");

    ul.appendChild(li);
    li.appendChild(Link);

    li.className = "css-li";
    li.id = className = "css-li";

    Link.innerHTML = res.types[type].title;
    Link.href = window.location.href = `#${res.types[type].title}`;

    article.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);

    div.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tableRow);
    div.className = res.types[type].title;
    div.id = res.types[type].title;

    h2.innerHTML = res.types[type].title;
    p.innerHTML = res.types[type].description;

    const codes = res.types[type].code;

    const tableHeaders = ["Title", "description", "Example"];
    tableHeaders.forEach((head) => {
      const headers = document.createElement("th");
      headers.className = "tableHeader";
      headers.id = "tableHeader";

      const textNode = document.createTextNode(head);
      headers.appendChild(textNode);
      tableRow.append(headers);
    });

    Object.values(codes).forEach((value) => {
      tbody.insertAdjacentHTML(
        "beforeend",
        ` <tr>
          <td>${value.title}</td>
          <td>${value.description}</td>
          <td>${value.example}</td>
        </tr>`
      );
    });
  }
})();
