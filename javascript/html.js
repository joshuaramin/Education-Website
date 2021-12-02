(async function html() {
  const req = await fetch("/json/html.json");
  const res = await req.json();
  const article = document.querySelector("article");
  const container = document.getElementById("container");

  const aside = document.createElement("aside");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  div.appendChild(h2);
  div.appendChild(p);
  container.appendChild(aside);
  article.appendChild(div);

  aside.appendChild(nav);
  nav.appendChild(ul);

  nav.className = "html";
  nav.id = "html";
  div.className = res.about.title;
  h2.innerHTML = res.about.title;
  p.innerHTML = res.about.description;

  for (let type in Object.keys(res.types)) {
    const li = document.createElement("li");
    const Link = document.createElement("a");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");
    const tableRow = document.createElement("tr");
    const code = document.createElement("code");
    const p = document.createElement("p");

    code.appendChild(p)

    article.appendChild(div);
    ul.appendChild(li);
    li.appendChild(Link);
    Link.innerHTML = res.types[type].title;
    Link.href = window.location.href = `#${res.types[type].title}`;
    div.appendChild(h2);
    div.className = res.types[type].title;
    div.id = res.types[type].title;
    h2.innerHTML = res.types[type].title;
    div.appendChild(code);
    div.appendChild(table);
    table.appendChild(tbody);
    tbody.appendChild(tableRow);

    li.className = "li";
    li.id = "li";
    Link.className = "Link";
    Link.className = "Link";
    ul.className = "ul";
    ul.id = "ul";

    p.textContent = res.types[type].example;

    const tableHeaders = ["Meta Tag", "Description"];
    const codes = res.types[type].code;
    tableHeaders.forEach((tableHead) => {
      const headers = document.createElement("th");
      headers.className = "tableHeader";
      headers.id = "tableHeaders";
      const textNode = document.createTextNode(tableHead);
      headers.appendChild(textNode);
      tableRow.append(headers);
    });
    Object.keys(codes).forEach((key, value) => {
      tbody.insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <td class="keys">${key}</td>
                <td>${codes[key]}</td
            </tr>
            `
      );
    });
  }

  console.log(res);
})();
