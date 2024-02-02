class ToolCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('.connect-btn').addEventListener('click', () => {
        this.toggleButton();
      });
    }
  
    disconnectedCallback() {
      this.shadowRoot.querySelector('.connect-btn').removeEventListener('click', () => {
        this.toggleButton();
      });
    }
  
    static get observedAttributes() {
      return ['name', 'details', 'imgsrc'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }

    toggleButton() {
        const btn = this.shadowRoot.querySelector('.connect-btn');
        btn.classList.toggle('active');
        // Delay the text change by 0.2 seconds
        setTimeout(() => {
          btn.textContent = btn.classList.contains('active') ? 'Connected' : 'Connect';
        }, 200); // Delay in milliseconds
      }
  
    render() {
      this.shadowRoot.innerHTML = `
      <style>
        p {
            margin: 0; 
        }
        .card {
            border: 1px solid #C8C8C8;
            border-radius: 8px;
            padding: 16px;
            width: 240px;
            height: 125px;
            font-family: Helvetica, Arial, sans-serif; 
            background-color: #FEF9F8;
        }
        .content {
            padding: 10px 15px;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        .connect-btn {
            width: 100px;
            height: 25px;
            margin: 0; 
            border: 1px solid #C8C8C8;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;
            outline: none;
            font-size: 12px;
            font-weight: 100;
            transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
            transition-delay: 0.2s;
        }
        .connect-btn.active {
            background-color: #DFFDE0;
            color: #41713F;
            border: none;
        }
        .logo {
            height: 28px;
            width: 28px;
        }
        .name {
            font-size: 18px;
            font-weight: 400;
            margin: 8px 0;
        }
        .description {
            font-size: 13px;
            font-weight: 400;
        }
    </style>
        <div class="card">
          <div class="content">
            <div class="header">
                <img src="${this.getAttribute('imgsrc')}" alt="Logo" class="logo">
                <button class="connect-btn">Connect</button>
            </div>
            <div>
                <h1 class="name">${this.getAttribute('name')}</h1>
                <p class="description">${this.getAttribute('details')}</p>
            </div>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('tool-card', ToolCard);
  