const observer = lozad('.lozad', {
    loaded: function(el) {
        // Custom implementation on a loaded element
        el.classList.add('loaded');
    }
});; // lazy loads elements with default selector as '.lozad'
observer.observe();