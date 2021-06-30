class UMCWidget {
  error = false;
  errorField = false;

  constructor(options) {
    this.API_URL = 'https://charite.me/local/firstbit/data.php';
    this.options = options;
    this.template = `<section class="UMC-widget">
    <div class="UMC-widget__form" id="UMC-widget__form">
      <div class=" UMC-widget__servicegroups-wrapper UMC-widget__block">
        <div class="UMC-widget__service-header UMC-widget__section-header">Группа услуг:</div>
        <div class="UMC-widget__service shadow-box shadow-box_loading">
          <p class="UMC-widget__service-item">Группа услуг 1</p>
          <p class="UMC-widget__service-item UMC-widget__service-item_selected">Группа услуг 2</p>
          <p class="UMC-widget__service-item">Группа услуг 3</p>
          <p class="UMC-widget__service-item">Группа услуг 4</p>
          <p class="UMC-widget__service-item">Группа услуг 5</p>
          <p class="UMC-widget__service-item">Группа услуг 6</p>
        </div>
      </div>
      <div class="UMC-widget__services-wrapper UMC-widget__block">
        <div class="UMC-widget__service-header UMC-widget__section-header">
          <p>Услуга:</p>
          <p class="UMC-widget__service-header-price"></p>
        </div>
        <div class="UMC-widget__service shadow-box shadow-box_hidden">
          <p class="UMC-widget__service-item">Услуга 1</p>
          <p class="UMC-widget__service-item">Услуга 2</p>
          <p class="UMC-widget__service-item UMC-widget__service-item_selected">Услуга 3</p>
          <p class="UMC-widget__service-item">Услуга 4</p>
          <p class="UMC-widget__service-item">Услуга 5</p>
          <p class="UMC-widget__service-item">Услуга 6</p>
        </div>
      </div>
      <div class="UMC-widget__medic-wrapper UMC-widget__block">
        <div class="UMC-widget__service-header UMC-widget__section-header">
          Врач:
        </div>
        <div class="UMC-widget__service shadow-box shadow-box_hidden">
          <p class="UMC-widget__service-item">Врач 1</p>
          <p class="UMC-widget__service-item">Врач 2</p>
          <p class="UMC-widget__service-item UMC-widget__service-item_selected">Врач 3</p>
          <p class="UMC-widget__service-item">Врач 4</p>
          <p class="UMC-widget__service-item">Врач 5</p>
          <p class="UMC-widget__service-item">Врач 6</p>
        </div>
      </div>
      <div class="UMC-widget__calendar-wrapper UMC-widget__block">
        <p class="UMC-widget__calendar-header UMC-widget__section-header">
          <span class="UMC-widget__header-item">Пн</span>
          <span class="UMC-widget__header-item">Вт</span>
          <span class="UMC-widget__header-item">Ср</span>
          <span class="UMC-widget__header-item">Чт</span>
          <span class="UMC-widget__header-item">Пт</span>
          <span class="UMC-widget__header-item UMC-widget__header-item_last">Сб</span>
          <span class="UMC-widget__header-item UMC-widget__header-item_last">Вс</span>
        </p>
        <div class="UMC-widget__calendar shadow-box shadow-box_hidden">
          <p class="UMC-widget__calendar-item">1</p>
          <p class="UMC-widget__calendar-item">2</p>
          <p class="UMC-widget__calendar-item">3</p>
          <p class="UMC-widget__calendar-item">4</p>
          <p class="UMC-widget__calendar-item">5</p>
          <p class="UMC-widget__calendar-item">6</p>
          <p class="UMC-widget__calendar-item">7</p>
          <p class="UMC-widget__calendar-item UMC-widget__calendar-item_busy">8</p>
          <p class="UMC-widget__calendar-item">9</p>
          <p class="UMC-widget__calendar-item">10</p>
          <p class="UMC-widget__calendar-item">11</p>
          <p class="UMC-widget__calendar-item">12</p>
          <p class="UMC-widget__calendar-item">13</p>
          <p class="UMC-widget__calendar-item">14</p>
          <p class="UMC-widget__calendar-item">15</p>
          <p class="UMC-widget__calendar-item UMC-widget__calendar-item_busy">16</p>
          <p class="UMC-widget__calendar-item">17</p>
          <p class="UMC-widget__calendar-item">18</p>
          <p class="UMC-widget__calendar-item">19</p>
          <p class="UMC-widget__calendar-item">20</p>
          <p class="UMC-widget__calendar-item">21</p>
          <p class="UMC-widget__calendar-item UMC-widget__calendar-item_selected">22</p>
          <p class="UMC-widget__calendar-item">23</p>
          <p class="UMC-widget__calendar-item">24</p>
          <p class="UMC-widget__calendar-item">25</p>
          <p class="UMC-widget__calendar-item">26</p>
          <p class="UMC-widget__calendar-item">27</p>
          <p class="UMC-widget__calendar-item">28</p>
          <p class="UMC-widget__calendar-item">29</p>
          <p class="UMC-widget__calendar-item">30</p>
        </div>
        <div class="UMC-widget__calendar-des">
          <div class="UMC-widget__calendar-des-item">
            <p class="UMC-widget__calendar-item UMC-widget__calendar-item_busy"></p>
            <p class="UMC-widget__calendar-des-text">Занято</p>
          </div>
          <div class="UMC-widget__calendar-des-item">
            <p class="UMC-widget__calendar-item"></p>
            <p class="UMC-widget__calendar-des-text">Свободно</p>
          </div>
          <div class="UMC-widget__calendar-des-item">
            <div class="UMC-widget__calendar-des-item-icon" title="Следующий месяц"></div>
          </div>
        </div>
      </div>
      <div class="UMC-widget__time-container UMC-widget__block">
        <p class="UMC-widget__time-header UMC-widget__section-header">Время записи на: 11 июля</p>
        <div class="UMC-widget__time-wrapper">
          <div class="UMC-widget__time shadow-box shadow-box_hidden">
            <p class="UMC-widget__time-item UMC-widget__time-item_free">
              09:00-10:00
            </p>
            <p class="UMC-widget__time-item UMC-widget__time-item_free">
              10:00-11:00
            </p>
          </div>
        </div>
      </div>       
    </div>
    <div class="UMC-widget__modal UMC-widget_class-hidden">
      <div class="UMC-widget__modal-body">
        <div class="UMC-widget__modal-header">
          <h3 class="UMC-widget__modal-title">Введите личные данные</h3>
          <div class="UMC-widget__modal-exit">&times;</div>
        </div>
        <div class="UMC-widget__modal-content">
          <div class="UMC-widget__inputs-wrapper  UMC-widget__modal-screen" data-name="inputs">
            <div class="UMC-widget__inputs">
              <div class="UMC-widget__input-wrapper">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Имя"
                  data-name="name"
                />
              </div>
              <div class="UMC-widget__input-wrapper">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Отчество"
                  data-name="fathername"
                />
              </div>
              <div class="UMC-widget__input-wrapper">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Фамилия"
                  data-name="surname"
                />
              </div>
              <div class="UMC-widget__input-wrapper">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Телефон"
                  data-name="number"
                />
              </div>
              <div class="UMC-widget__input-wrapper UMC-widget_class-hidden">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="email"
                  name="email"
                  data-name="email"
                />
              </div>
              <div class="UMC-widget__input-wrapper UMC-widget_class-hidden">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Адрес"
                  data-name="address"
                />
              </div>
              <div class="UMC-widget__input-wrapper UMC-widget_class-hidden">
                <input
                  class="UMC-widget__input UMC-widget__elem"
                  placeholder="Комментарий"
                  data-name="comment"
                />
              </div>
            </div>
            <p class="UMC-widget__open-input" data-name="address">Адрес</p>
            <p class="UMC-widget__open-input" data-name="comment">
              Комментарий
            </p>
            <div class="UMC-widget__button-area">
              <div class="UMC-widget__button" id="UMC-widget__btn-sign">
                Записаться
              </div>
            </div>
            <p class="UMC-widget__private-text">
              Нажимая "Записаться на прием", Вы даете согласие на обработку
              <a class="UMC-widget__private-link" href="#">
                персональных данных</a
              >.
            </p>
          </div>
          <div class="UMC-widget__accept-wrapper UMC-widget_class-hidden UMC-widget__modal-screen" data-name="accept">
            <div class="UMC-widget__input-wrapper">
              <input
                class="UMC-widget__input UMC-widget__elem"
                placeholder="Код из смс"
                data-name="code"
              />
            </div>
            <p class="UMC-widget__private-text">
              На Ваш номер в течение нескольких минут придет код подтверждения.
              Введите его в поле выше.
            </p>
            <div class="UMC-widget__button-area">
              <div class="UMC-widget__button" id="UMC-widget__btn-accept">
                подтвердить номер
              </div>
            </div>
          </div>
          <div class="UMC-widget__success-wrapper UMC-widget_class-hidden UMC-widget__modal-screen" data-name="success">
            <div class="UMC-widget__success-area">
                <img class="UMC-widget__success-icon" src="https://charite.me/local/firstbit/images/success.png" alt="" />
                <p class="UMC-widget__success-text"></p>
            </div>
          </div>
          <div class="UMC-widget__error-wrapper UMC-widget_class-hidden UMC-widget__modal-screen" data-name="error">
            <div class="UMC-widget__success-area">
                <img class="UMC-widget__success-icon" src="https://charite.me/local/firstbit/images/error.png" alt="" />
                <p class="UMC-widget__success-text">Произошла ошибка! Попробуйте записаться еще раз или перезагрузите страницу</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>`;
    this._init();
  }

  async _init() {
    try {
      await this._getSettings();
      this._setTemplate();
      this._setSettings();
      await this._getData();
      this._formatData();
      this._widgetInit();
    } catch (e) {
      console.error(e)
      this._sendError();
    }
  }

  async _getSettings() {
    const settingsJson = await fetch('../settings.json');
    this.settings = await settingsJson.json();
  }

  async _getData() {
    const payload = {
        method: 'schedule',
        data: this.options.doctors
    };
    const data = await fetch(this.API_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    this.medics = await data.json();
  }

  _setTemplate() {
    const settings = this.settings.settings;
    if (this.options.root) {
      const root = document.querySelector('#' + this.options.root);
      if (root) {
        root.innerHTML = this.template;
        this.widget = document.querySelector('.UMC-widget');
      }
    } else {
      this.modalMode = true;
      const modalTemplate = `
        <div class="UMC-widget__modal UMC-widget_class-hidden">
          <div class="UMC-widget__modal-body UMC-widget__modal-body_global">
            <div class="UMC-widget__modal-header">
              <h3 class="UMC-widget__modal-title">Запись на прием</h3>
              <div class="UMC-widget__modal-exit">&times;</div>
            </div>
            <div class="UMC-widget__modal-content"></div>
          </div>
        </div>`;
      this.root = document.createElement('div');
      this.root.className = 'UMC-widget__container';
      this.root.innerHTML = modalTemplate;
      this.globalModal = this.root.querySelector('.UMC-widget__modal');
      this.globalModalBody = this.root.querySelector('.UMC-widget__modal-body');
      this.globalModalExit = this.root.querySelector('.UMC-widget__modal-body');
      const content = this.globalModal.querySelector('.UMC-widget__modal-content');
      content.innerHTML = this.template;
      const template = `<img src="/images/pencil.svg" class="UMC-widget__toggler-icon" alt="Запись на прием">`;
      this.toggler = document.createElement('div');
      this.toggler.className = 'UMC-widget__toggler';
      this.toggler.innerHTML = template;
      this.root.append(this.toggler);
      this.widget = this.root.querySelector('.UMC-widget');
      this.toggler.addEventListener('click', () => {
        this.globalModal.classList.remove('UMC-widget_class-hidden');
      })
      this.globalModalExit.addEventListener('click', () => {
        this.globalModal.classList.add('UMC-widget_class-hidden');
      })
      document.body.append(this.root);
    }
    
  }

  _setSettings() {
    const styles = this.settings.style;
    for (let key in styles) {
      document.documentElement.style.setProperty("--" + key, styles[key]);
    }
  }

  _formatData() {
    this.services = [];
    this.medics.forEach(item => {
      const arr = item.services.filter(elem => !this.services.some(serv => serv.service_id === elem.service_id));
      this.services = [...this.services, ...arr];
    })
  }

  _widgetInit() {
    this._initEvents();
    this.state = new WidgetState();
    this.state.setField('site_id', window.location.origin);
    this.serviceGroupArea = new ServiceGroupArea(this);
    this.serviceArea = new ServiceArea(this);
    this.medicArea = new MedicArea(this);
    this.calendar = new Calendar(this);
    this.timeArea = new TimeArea(this);
		this.modal = new Modal(this);
		this.btnArea = new BtnArea(this);
		this.fieldArea = this.modal.screens.find(item => item.name === 'inputs');
		this.successScreen = this.modal.screens.find(item => item.name === 'success');
  }

  _initEvents() {
    this.width = document.documentElement.clientWidth;
    window.addEventListener('resize', () => {
      this.width = document.documentElement.clientWidth;
    })
  }

  async _sendCode() {
    const codeMessage = {
      data: {
        number: '+' + this.state.getField('number'),
        code: this.state.getCode(),
      },
      method: 'sms',
    }
    try {
      let data = await fetch(this.API_URL, {
        method: 'POST',
        body: JSON.stringify(codeMessage)
      });
      return await data.json();
    } catch (e) {
      this._sendModalError(e);
    }
  }

  async _sendInformation() {
    const state = this.state.getState();	
    const payload = {data: state, method: 'appointment'};
		try {
			const data = await fetch(this.API_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      await this.refreshInformation();
      return await data.json();
		} catch {
			this._sendModalError();
		}
	}

  async refreshInformation() {
    const payload = {
      method: 'schedule',
      data: this.options.doctors
    }
    
    let data = await fetch(this.API_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    })
    data = await data.json();

    this.user = data[0];
    this.calendar.user = this.user;
    this.calendar.init();
    this.timeArea.init();
  }

  async checkNumber() {
    this.errorField = false;
    const fields = this.state.getRequiredFields();
    this.fieldArea.fields.forEach((item) => {
      if (fields.includes(item.name) && (item.error || item._isEmpty())) {
        this.errorField = true;
        item.sendError();
      }
    });
    if (!this.errorField) {
      this.state.code = this._createCode();
      this.btnArea._showPreloader(true);
      const result = await this._sendCode();
      this.btnArea._hidePreloader();
      if (result && result.success) {
				this.modal.setTitle("Подтвердите номер телефона");
        this.modal._changeScreen('accept');
      } else {
				this._sendModalError();
			}
    }
  }

  async submit() {
		let input = this.fieldArea.fields.find(item => item.name === 'code');
		if (input.error || input._isEmpty()) {
			input.sendError();
		} else {
			let condition = btoa(input.input.value.trim()) === this.state.code;
			if (condition) {
				this.btnArea._showPreloader(false);
				let result = await this._sendInformation();
				if (result && result.success) {
					this.modal.setTitle("Запись произведена");
					this.btnArea._hidePreloader();
					this.successScreen.setData();
					this.modal._clearInputs();
					this.modal._changeScreen('success');
					this.state.clearState();
				} else {
					this._sendModalError();
				}
			} else {
				input.sendCodeError();
			}
		}
	}

  static _sendError(widgets) {
    
  }

  _sendModalError() {
    this.modal.setTitle('Ошибка');
    this.modal._changeScreen('error');
  }

  _createCode() {
    let string = "";
    for (let i = 0; i < 3; i++) {
      string += String(Math.round(Math.random() * 100));
    }
    if (string.length === 5) {
      return string;
    } else {
      return this._createCode();
    }
  }
}

class WidgetState {
  _state = {};
  _code;
  _requiredFields = [
    "name",
    "number",
    "surname",
    "fathername",
    "dateTime",
  ];

  setField(name, value) {
    this._state[name] = value;
  }

  getField(name) {
    return this._state[name];
  }

  getState() {
    return this._state;
  }

  clearState() {
    this._state = {};
    this._code = null;
  }

  getRequiredFields() {
    return this._requiredFields;
  }

  isRequired(name) {
    return this._requiredFields.includes(name);
  }

  set code(val) {
    this._code = btoa(val);
  }

  get code() {
    return this._code;
  }
}

class Block {
  constructor(item, data) {
    this.wrapper = item;
    this.widget = data;
    this.count = 0;
    this.block = item.querySelector('.shadow-box');
  }

  show() {
    this.block.classList.remove('shadow-box_hidden');
    this.block.classList.remove('shadow-box_loading');
    if (this.widget.width <= 768) {
      this.scroll();
    }
    if (this.count > 0 && this.deps) {
      this.deps.forEach(item => {
        this.widget[item].hide();
      })
    }
    this.count++;
  }

  hide() {
    this.block.classList.add('shadow-box_hidden');
  }

  scroll() {
    window.scrollTo(0, this.wrapper.offsetTop);
  }

  loading() {
    this.block.classList.add('shadow-box_loading');
  }
}

class ServiceGroupArea extends Block {
  
  serviceList = [];
  activeService = null;
  
  constructor (data) {
    const area = data.widget.querySelector('.UMC-widget__servicegroups-wrapper');
    super(area, data);
    this.widget = data;
    this.box = area.querySelector('.UMC-widget__service');
    this.deps = ['serviceArea', 'medicArea', 'calendar', 'timeArea'];
    this.services = data.services;
    this._init();
  }
  
  _init() {
    this._renderServiceItems();
    this.show();
  }

  _renderServiceItems() {
    this.box.innerHTML = '';
    this.services.forEach(item => {
      const serviceItem = document.createElement('p');
      serviceItem.className = ('UMC-widget__service-item');
      serviceItem.textContent = item.service_name;
      serviceItem.addEventListener('click', () => this._clickServiceItem(serviceItem, item));
      this.serviceList.push(serviceItem);
      this.box.append(serviceItem);
    })
  }

  _clickServiceItem(node, service) {
    this.serviceList.forEach(item => {
      item.classList.remove('UMC-widget__service-item_selected');
    });
    node.classList.add('UMC-widget__service-item_selected');
    this.activeService = service;
    this.widget.serviceArea.init();
    this.widget.serviceArea.price = null;
  }
}

class ServiceArea extends Block {
  
  serviceList = [];
  activeService = null;
  
  constructor (data) {
    const area = data.widget.querySelector('.UMC-widget__services-wrapper');
    super(area, data);
    this.widget = data;
    this.deps = ['medicArea', 'calendar', 'timeArea'];
    this.services = data.services;
    this.box = area.querySelector('.UMC-widget__service');
    this._price = area.querySelector('.UMC-widget__service-header-price');
  }

  set price(val) {
    if (val) {
      this._price.textContent = val + ' р.';
    } else {
      this._price.textContent = '';
    }
  }

  init() {
    this._renderServiceItems();
    this.show();
  }

  _renderServiceItems() {
    this.box.innerHTML = '';
    this.services.forEach(item => {
      const serviceItem = document.createElement('p');
      serviceItem.className = ('UMC-widget__service-item');
      serviceItem.textContent = item.service_name;
      serviceItem.addEventListener('click', () => this._clickServiceItem(serviceItem, item));
      this.serviceList.push(serviceItem);
      this.box.append(serviceItem);
    })
  }

  _clickServiceItem(node, service) {
    this.serviceList.forEach(item => {
      item.classList.remove('UMC-widget__service-item_selected');
    });
    node.classList.add('UMC-widget__service-item_selected');
    this.activeService = service;
    this.widget.state.setField('service_id', service.service_id);
    this.widget.medicArea.init();
    this.price = service.service_cost;
  }
}

class MedicArea extends Block {
  serviceList = [];
  activeService = null;
  
  constructor(data) {
    const area = data.widget.querySelector('.UMC-widget__medic-wrapper');
    super(area, data);
    this.widget = data;
    this.box = area.querySelector('.UMC-widget__service');
    this.deps = ['calendar', 'timeArea'];
    this.medics = data.medics;
  }

  init() {
    this._renderServiceItems();
    this.show();
  }

  _renderServiceItems() {
    this.box.innerHTML = '';
    this.medics.forEach(item => {
      const serviceItem = document.createElement('p');
      serviceItem.className = ('UMC-widget__service-item');
      serviceItem.textContent = item.doctor_name;
      serviceItem.addEventListener('click', () => this._clickServiceItem(serviceItem, item));
      this.serviceList.push(serviceItem);
      this.box.append(serviceItem);
    })
  }

  _clickServiceItem(node, doctor) {
    this.serviceList.forEach(item => {
      item.classList.remove('UMC-widget__service-item_selected');
    });
    node.classList.add('UMC-widget__service-item_selected');
    this.widget.state.setField('doctor_id', doctor.doctor_id);
    this.widget.calendar.init();
    this.widget.calendar.show();
  }
}

class Calendar extends Block {
  daysOfWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  calendarElements = [];
  timeArray = [];
  selectedDay = null;
  days = [];
  current = true;

  constructor(data) {
    const area = data.widget.querySelector('.UMC-widget__calendar-wrapper');
    super(area, data);
    this.date = new Date();
    this.widget = data;
    this.deps = ['timeArea'];
    this.medics = data.medics;
    this.calendar = data.widget.querySelector(".UMC-widget__calendar");
    this.arrow = area.querySelector('.UMC-widget__calendar-des-item-icon');
    this._initEvents();
    this.init();
  }

  init() {
    this._clearContainers();
    this._changeTimeFormat();
    this._fetchDays();
    this._render();
  }

  _changeTimeFormat() {
    if (this.widget.serviceArea.activeService) {
      this.duration = new Date(this.widget.serviceArea.activeService.service_time);
      this.duration = this.duration.getHours() * 60 + this.duration.getMinutes();
    } else {
      this.duration = 30;
    }
    const userId = this.widget.state.getField('doctor_id');
    this.user = this.medics.find(item => item.doctor_id === userId);
    this.user.time.forEach((item) => {
      const start = new Date(item.time_start);
      const end = new Date(item.time_end);      
      while (start < end) {
        let firstDate = new Date(start.getTime());
        firstDate.setMinutes(firstDate.getMinutes() + this.duration);
        if (firstDate <= end) {
          this.timeArray.push(start.getTime());
        }
        start.setMinutes(start.getMinutes() + this.duration);
      }
    })
  }

  _fetchDays() {
    const now = new Date();
    if (this.current) {
      const date = new Date();
      now.setMonth(date.getMonth());
    } else {
      const date = new Date();
      now.setMonth(date.getMonth() + 1);
    }
    const month = now.getMonth();
    const date = now.getDate();
    now.setDate(1);
    while (now.getMonth() === month) {
      const day = {
        day: now.getDate(),
        dayOfWeek: now.getDay(),
        month: now.getMonth(),
        fullDate: now,
        free: now >= this.date,
      };
      if (this.timeArray.length && day.free) {
        const elem = this.timeArray.some(item => {
          const date = new Date(item);
          return date.getDate() === day.day && date.getMonth() === day.month;
        })
        if (!elem) {
          day.free = false;
        }
      }
      this.days.push(day);
      now.setDate(now.getDate() + 1);
    }
    const dayOfWeek = this.days[0].dayOfWeek;
    if (dayOfWeek != 1) {
      const emptyBoxes = [];
      for(let i = dayOfWeek; i > 1; i--) {
        emptyBoxes.push({empty: true});
      }
      this.days = [...emptyBoxes.reverse(), ...this.days];
    }
  }

  _render() {
    this.days.forEach((item, index) => {
      const day = document.createElement('p');
      if (item.empty) {
        day.className = 'UMC-widget__calendar-item UMC-widget__calendar-item_empty';
      } else  {
        if (item.free) {
          day.className = 'UMC-widget__calendar-item';
        } else {
          day.className = 'UMC-widget__calendar-item UMC-widget__calendar-item_busy';
        }
        day.textContent = item.day;
        day.addEventListener('click', () => this._clickCalendarElement(day, item));
      }
      this.calendarElements.push(day);
      this.calendar.append(day);
    });
  }

  _clearContainers() {
    this.calendar.innerHTML = '';
    this.days = [];
    this.timeArray = [];
  }

  _clickCalendarElement(elem, data) {
    if (data.free) {
      this.calendar.querySelectorAll('.UMC-widget__calendar-item').forEach(item => {
        item.classList.remove('UMC-widget__calendar-item_selected');
      })
      elem.classList.add('UMC-widget__calendar-item_selected');
      this.selectedDay = data;
      this.widget.timeArea.init();
    }
  }

  _initEvents() {
    this.arrow.addEventListener('click', () => this.changeMonth())
  }

  changeMonth() {
    if (this.current) {
      this.arrow.classList.add('UMC-widget__calendar-des-item-icon_back');
      this.arrow.setAttribute('title', 'Предыдущий месяц');
    } else {
      this.arrow.classList.remove('UMC-widget__calendar-des-item-icon_back');
      this.arrow.setAttribute('title', 'Следующий месяц');
    }
    this.current = !this.current;
    this.init();
  }
}

class TimeArea extends Block {
  constructor(data) {
    const area = data.widget.querySelector('.UMC-widget__time-container');
    super(area, data);
    this.months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    this.widget = data;
    this.box = area.querySelector('.shadow-box');
    this.textItem = area.querySelector('.UMC-widget__time-header');
    const date = new Date();
    this.setText({day: date.getDate(), month: date.getMonth()});
  }

  init() {
    this.box.innerHTML = '';
    this.day = this.widget.calendar.selectedDay;
    this.duration = this.widget.calendar.duration;
    this.timeArray = this.widget.calendar.timeArray.filter(item => {
      const date = (new Date(item)).getDate();
      return date === this.day.day;
    });
    this.setText(this.day);
    this._render();
    this.show();
  }
  
  setText(day) {
    this.textItem.textContent = `Время записи на ${day.day} ${this.months[day.month]}:`;
  }

  clickTimeElement(item) {
    const date = new Date(item);
    this.widget.state.setField('dateTime', date.toISOString());
    this.widget.modal._showModal();
  }

  _render() {
    this.timeArray.forEach(item => {
      const dateTime = new Date(item);
      const start = ("0" + dateTime.getHours()).slice(-2) + ":" + ("0" + dateTime.getMinutes()).slice(-2);
      dateTime.setMinutes(dateTime.getMinutes() + this.duration);
      const end = ("0" + dateTime.getHours()).slice(-2) + ":" + ("0" + dateTime.getMinutes()).slice(-2);
      const timeElement = document.createElement('p');
      timeElement.textContent = `${start}-${end}`;

      if (this.day.free) {
        timeElement.className = 'UMC-widget__time-item UMC-widget__time-item_free';
      } else {
        timeElement.className = 'UMC-widget__time-item';
      }
      timeElement.addEventListener('click', () => this.clickTimeElement(item));
      this.box.append(timeElement);
    })
  }
}

class BtnArea {
  constructor(widget) {
    this.widget = widget;
    this.btn = this.widget.widget.querySelector(" #UMC-widget__btn-sign");
    this.access = this.widget.widget.querySelector(" #UMC-widget__btn-accept");
    this._init();
  }

  _init() {
    this.btn.addEventListener("click", () => {
      this.widget.checkNumber();
    });
    this.access.addEventListener("click", () => {
      this.widget.submit();
    });
  }

  _showPreloader(code) {
    if (!this.preloader) {
      this.preloader = document.createElement("img");
      this.preloader.src = "https://itprotection.ru/api/load.gif";
      this.preloader.classList.add("UMC-widget__preloader-btn");
      if (code) {
        this.btn.innerHTML = "";
        this.btn.append(this.preloader);
      } else {
        this.access.innerHTML = "";
        this.access.append(this.preloader);
      }
    }
  }

  _hidePreloader() {
    if (this.preloader) {
      this.preloader.remove();
      this.preloader = null;
		}
    this.btn.textContent = "записаться на прием";
    this.access.textContent = "подтвердить номер";
  }
}

class Modal {
	screens = [];
  activeScreen = 'inputs';

	constructor(widget) {
    this.widget = widget;
    this.title = this.widget.widget.querySelector(" .UMC-widget__modal-title");
    this.modal = this.widget.widget.querySelector(" .UMC-widget__modal");
    this.content = this.widget.widget.querySelector(" .UMC-widget__modal-body");
    this.exit = this.widget.widget.querySelector(" .UMC-widget__modal-exit");
		this._init()
	}

	_init() {
		let screens = this.widget.widget.querySelectorAll(' .UMC-widget__modal-screen');
    
		screens.forEach(item => {
			if (item.dataset.name === 'inputs') {
        
				this.screens.push(new FieldArea(item, this.widget));
        
			} else if (item.dataset.name === 'success') {
        
				this.screens.push(new SuccessScreen(item, this.widget));
        
			} else {
        
				this.screens.push(new ModalScreen(item, this.widget));
        
			}
		});
		this.exit.addEventListener("click", () => {
      this._hideModal();
    });
    this.modal.addEventListener("click", (e) => {
      if (e.target == this.modal) {
        this._hideModal();
      }
    });
	}

	_showModal() {
    document.body.style.overflow = "hidden";
    this.modal.classList.remove("UMC-widget_class-hidden");
    setTimeout(() => {
      this.content.classList.remove("UMC-widget__modal-body_hidden");
    }, 100);
  }

  _hideModal() {
    this.content.classList.add("UMC-widget__modal-body_hidden");
    setTimeout(() => {
      this.modal.classList.add("UMC-widget_class-hidden");
      document.body.style.overflow = "auto";
      this._exitModalCallback();
    }, 100);
	}
	
	_changeScreen(name) {
		this.screens.forEach(item => {
			if (item.name === name) {
				item.screen.classList.remove("UMC-widget_class-hidden");
			} else {
				item.screen.classList.add("UMC-widget_class-hidden");
			}
    })
    this.activeScreen = name;
  }
  
  _exitModalCallback() {
    switch (this.activeScreen) {
      case 'accept': {
        this.widget.calendar._disableTimeElements();
        break;
      }
      case 'success': {
        this.widget.calendar._activeTimeElements();
        this.widget.calendar.activeTime.remove();
        this.widget.calendar.activeTime = null;
        this.widget.calendar._removeFromScreens();
        this._changeScreen('inputs');
        break;
      }
      case 'error': {
        this.widget.calendar._activeTimeElements();
        this._changeScreen('inputs');
        break;
      }
      default: {
    
      }
    }
  }

	setTitle(text) {
		this.title.textContent = text;
	}

	_clearInputs() {
		let screen = this.screens.find(item => item.name === 'inputs');
		screen.fields.forEach(item => item.input.value = '');
	}
}

class ModalScreen {
	constructor(item, widget) {
    this.widget = widget;
		this.screen = item;
		this.name = item.dataset.name;
	}
}

class FieldArea extends ModalScreen {
  fields = [];  
  
  constructor(item, widget) {
		super(item, widget);
    this._init();
  }

  _init() {
    let inputs = this.widget.widget.querySelectorAll(" .UMC-widget__input-wrapper");
    let openInputBtns = this.widget.widget.querySelectorAll(+ " .UMC-widget__open-input");
    inputs.forEach((item) => {
      this.fields.push(new Input(item, this.widget));
    });
    
    openInputBtns.forEach((item) => {
      item.addEventListener("click", () => {
        let input = this.widget.widget.querySelector(
          ` .UMC-widget__input[data-name="${item.dataset.name}"]`
        );
        input.parentNode.classList.remove("UMC-widget_class-hidden");
        item.remove();
      });
    });
	}
	
	_clearInputs() {
		this.fields.forEach(item => item.value = '');
	}
}

class SuccessScreen extends ModalScreen {
	constructor(item, widget) {
		super(item, widget);
		this.node = item.querySelector(' .UMC-widget__success-text');
	}

	setData() {
		let state = this.widget.state.getField('dateTime');
		let date = new Date(state);
		let dateStr = ("0" + date.getDate()).slice(-2) + '.' + ("0" + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();
		let timeStr = ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2);
		let user = this.widget.user.doctor_name;
		this.node.innerHTML = `Вы записались на прием к врачу <span class="UMC-widget__success-highlight">${user}<span> на <span class="UMC-widget__success-highlight">${dateStr}<span> в <span class="UMC-widget__success-highlight">${timeStr}<span>`;
	}
}

class Input {
  constructor(wrapper, widget) {
    this.wrapper = wrapper;
    this.widget = widget;
    this.input = wrapper.querySelector(" .UMC-widget__input");
    
    this.name = this.input.dataset.name;
		this.error = false;
    this.required = this.widget.state.isRequired(this.name);
    this._setValidation();
    this._setText();
    this._init();
  }

  _init() {
    if (this.required || this.name === 'code') {
      this.input.addEventListener("focusout", () => {
        let condition = this._isEmpty();
        if (condition) {
          this.sendError();
          this.error = true;
        } else {
          this.error = false;
        }
      });
		}
    if (this.name === "number" && IMask) { 
      let maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      this.mask = IMask(this.input, maskOptions);
    }
		this.input.addEventListener("focusin", () => {
			this.error = false;
			this.input.classList.remove("UMC-widget__input_empty");
			if (this.info) {
				this.info.remove();
				this.info = null;
			}
		});
    this.input.addEventListener("input", (e) => {
      if (this.name === "number" && this.mask) {        
        this.widget.state.setField(this.name, this.mask.unmaskedValue);
      } else {
        this.widget.state.setField(this.name, e.target.value.trim());
      }
    });
  }

  _setText() {
    if (this.name === "number")
      this.text = `Введите номер телефона. Минимальная длина 11 символов. Допускаются только цифры`;
    else if (this.name === "name")
      this.text = `Введите имя. Минимальная длина ${this.minValue} символа`;
    else if (this.name === "surname")
      this.text = `Введите фамилию. Минимальная длина ${this.minValue} символа`;
    else if (this.name === "fathername")
      this.text = `Введите отчество. Минимальная длина ${this.minValue} символа`;
    else if (this.name === "code") this.text = `Введите пятизначный код из смс`;
    else
      this.text = `Заполните обязательное поле. Минимальная длина - ${this.minValue} символа`;
  }

  _setValidation() {
    if (this.name === "number") {
      this.minValue = 16;
      this.maxValue = 16;
    } else if (
      this.name === "name" ||
      this.name === "surname" ||
      this.name === "fathername"
    ) {
      this.minValue = 3;
      this.maxValue = 20;
    } else if (this.name === "code") {
      this.minValue = 5;
      this.maxValue = 5;
    } else {
      this.minValue = 3;
      this.maxValue = 100;
    }
    this.input.setAttribute("maxlength", this.maxValue);
  }

  sendError() {
    if (!this.info) {
      this.input.classList.add("UMC-widget__input_empty");
      this.info = document.createElement("p");
      this.info.className = "UMC-widget__input-info";
      this.info.textContent = this.text;
      this.wrapper.append(this.info);
    }
	}
	
	sendCodeError() {
		if (!this.info) {
      this.input.classList.add("UMC-widget__input_empty");
      this.info = document.createElement("p");
      this.info.className = "UMC-widget__input-info";
      this.info.textContent = 'Неправильный код';
      this.wrapper.append(this.info);
    }
	}
	
	_isEmpty() {
		return !this.input.value ||
			this.input.value.length < this.minValue ||
			this.input.value.length > this.maxValue;
	}
}



