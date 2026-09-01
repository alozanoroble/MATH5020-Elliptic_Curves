// The hint/solution warning-gate widget.
//
// Three states per instance, kept in a closure (not localStorage/sessionStorage):
// "closed" -> click trigger -> "confirming" (shows the warning + Show/Cancel)
//          -> click Show -> "open" (content revealed, stays revealed for this page view)
//          -> click Cancel -> back to "closed"
// A fresh page load (or navigating to a different problem and back) always
// starts every gate at "closed" again — that's the point: it re-warns every time.
window.ECApp = window.ECApp || {};

window.ECApp.reveal = (function () {
  var uid = 0;

  // config: { triggerLabel, tone ('hint'|'solution'), warningText,
  //           confirmLabel, cancelLabel, renderContent(panelEl) }
  function build(config) {
    uid += 1;
    var panelId = "reveal-panel-" + uid;
    var state = "closed";

    var wrap = document.createElement("div");
    wrap.className = "reveal reveal-" + config.tone;

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "reveal-trigger";
    trigger.textContent = config.triggerLabel;
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", panelId);

    var panel = document.createElement("div");
    panel.id = panelId;
    panel.className = "reveal-panel";
    panel.hidden = true;

    function renderWarning() {
      panel.innerHTML = "";
      var warn = document.createElement("p");
      warn.className = "reveal-warning";
      warn.textContent = config.warningText;
      var actions = document.createElement("div");
      actions.className = "reveal-actions";

      var showBtn = document.createElement("button");
      showBtn.type = "button";
      showBtn.className = "reveal-confirm";
      showBtn.textContent = config.confirmLabel;
      showBtn.addEventListener("click", function () {
        state = "open";
        trigger.hidden = true;
        renderContentState();
        window.ECApp.katexRender(panel);
        panel.querySelector(".reveal-content")?.focus();
      });

      var cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "reveal-cancel";
      cancelBtn.textContent = config.cancelLabel;
      cancelBtn.addEventListener("click", function () {
        state = "closed";
        trigger.setAttribute("aria-expanded", "false");
        panel.hidden = true;
        trigger.focus();
      });

      actions.appendChild(showBtn);
      actions.appendChild(cancelBtn);
      panel.appendChild(warn);
      panel.appendChild(actions);
      showBtn.focus();
    }

    function renderContentState() {
      panel.innerHTML = "";
      var content = document.createElement("div");
      content.className = "reveal-content";
      content.tabIndex = -1;
      config.renderContent(content);
      panel.appendChild(content);
    }

    trigger.addEventListener("click", function () {
      if (state === "closed") {
        state = "confirming";
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        renderWarning();
      }
    });

    wrap.appendChild(trigger);
    wrap.appendChild(panel);
    return wrap;
  }

  return { build: build };
})();
