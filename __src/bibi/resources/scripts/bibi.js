import sML from 'sml.js'; self.sML = sML;
import * as _ from './bibi.heart.js'; for(const m in _) self[m] = _[m];

require('./bibi.book.scss');

document.addEventListener('DOMContentLoaded', Bibi.ring);

if (localStorage.getItem("ui-theme") !== null) {
    if (localStorage.getItem("ui-theme") === "dark") {
        document.documentElement.classList.add('dark-mode');
    }
} else {
    localStorage.setItem("ui-theme", "light");
}
