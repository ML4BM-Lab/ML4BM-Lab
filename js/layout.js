/* Edit header and footer here — changes apply site-wide. Use {{BASE}} for page-relative links. */
window.ML4BM_LAYOUT = {
  header:
    '<header class="site-header">' +
    '  <div class="container header-inner">' +
    '    <a href="{{BASE}}index.html" class="logo-link">' +
    '      <span class="logo-icon">ML4BM</span>' +
    '      <span>ML4BM Lab</span>' +
    '    </a>' +
    '    <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">' +
    '      <span></span><span></span><span></span>' +
    '    </button>' +
    '    <nav class="site-nav" aria-label="Main navigation">' +
    '      <ul>' +
    '        <li><a href="{{BASE}}index.html" data-nav="home">Home</a></li>' +
    '        <li><a href="{{BASE}}members.html" data-nav="members">Members</a></li>' +
    '        <li><a href="{{BASE}}projects.html" data-nav="projects">Projects</a></li>' +
    '        <li><a href="{{BASE}}publications.html" data-nav="publications">Publications</a></li>' +
    '        <li><a href="{{BASE}}news.html" data-nav="news">News</a></li>' +
    '        <li><a href="{{BASE}}contact.html" data-nav="contact">Contact</a></li>' +
    '      </ul>' +
    '    </nav>' +
    '  </div>' +
    '</header>',

  footer:
    '<footer class="site-footer">' +
    '  <div class="container">' +
    '    <div class="footer-grid">' +
    '      <div>' +
    '        <h3><a href="https://cima.cun.es/en/research/research-programs/computational-biology-research-programs/research-group-machine-learning-biomedicine" target="_blank" rel="noopener noreferrer">Machine Learning for BioMedicine Group</a></h3>' +
    '        <p>Center for Applied Medical Research (CIMA)<br>University of Navarra, Pamplona, Spain</p>' +
    '        <div class="footer-affiliations">' +
    '          <img src="{{BASE}}assets/images/cima-logo.svg" alt="CIMA">' +
    '          <img src="{{BASE}}assets/images/unav-logo.svg" alt="University of Navarra">' +
    '        </div>' +
    '      </div>' +
    '      <div>' +
    '        <h3>Links</h3>' +
    '        <p><a href="https://github.com/ML4BM-Lab/ML4BM-Lab" target="_blank" rel="noopener noreferrer" class="footer-github-link">' +
    '          <img src="{{BASE}}assets/images/GitHub-logo-white.svg" alt="">' +
    '          GitHub Repository</a></p>' +
    '        <p><a href="{{BASE}}contact.html">Contact Us</a></p>' +
    '      </div>' +
    '    </div>' +
    '    <div class="footer-bottom">' +
    '      <span>&copy; 2026 Machine Learning 4 Biomedicine Group</span>' +
    '      <span><a href="{{BASE}}index.html">ML4BM Lab</a></span>' +
    '    </div>' +
    '  </div>' +
    '</footer>'
};
