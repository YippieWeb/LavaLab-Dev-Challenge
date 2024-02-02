class ConnectCard extends HTMLElement {
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
            width: 250px;
            height: 130px;
            font-family: Helvetica, Arial, sans-serif; 
            background-color: #FEF9F8;
        }
        .content {
            padding: 15px;
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
            border: 1px solid #e0e0e0;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;
            outline: none;
            font-size: 12px;
        }
        .connect-btn.active {
            background-color: #DFFDE0;
            color: #41713F;
            border: none;
        }
        .logo {
            height: 25px;
            width: 25px;
        }
        .name {
            font-size: 18px;
            font-weight: 400;
            margin: 8px 0;
        }
        .description {
            font-size: 14px;
            font-weight: 300;
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
  
    toggleButton() {
      const btn = this.shadowRoot.querySelector('.connect-btn');
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? 'Connected' : 'Connect';
    }
  }
  
  customElements.define('connect-card', ConnectCard);
  