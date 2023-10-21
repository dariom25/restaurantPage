export function footer() {
    const footerDiv = document.createElement("div");
    footerDiv.innerHTML = 'Photo by <a href="https://unsplash.com/@weirick?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jake Weirick</a> on <a href="https://unsplash.com/photos/the-night-sky-is-filled-with-stars-Q_RBVFFXR_g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    footerDiv.setAttribute("id", "footer");

    return footerDiv
}