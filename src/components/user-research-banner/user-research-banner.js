function UserResearchBanner($module) {
  this.$module = $module;
  this.$closeLink = this.$module.querySelector('.hmrc-user-research-banner__close');
  this.cookieName = 'mdtpurr';
}

UserResearchBanner.prototype.init = function init() {
  const cookieData = this.getCookie(this.cookieName);

  if (cookieData == null) {
    this.$module.classList.remove('js-hidden');
  }

  this.$closeLink.addEventListener('click', this.eventHandlers.hideClick.bind(this));
};

UserResearchBanner.prototype.setCookie = (name, value, options) => {
  if (typeof options === 'undefined') {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  let cookieString = `${name}=${value}; path=/`;
  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + (options.days * 24 * 60 * 60 * 1000));
    cookieString = `${cookieString}; expires=${date.toGMTString()}`;
  }
  if (document.location.protocol === 'https:') {
    cookieString += '; Secure';
  }
  document.cookie = cookieString;
};

UserResearchBanner.prototype.getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');
  for (let i = 0, len = cookies.length; i < len; i += 1) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

UserResearchBanner.prototype.eventHandlers = {
  hideClick(event) {
    event.preventDefault();

    this.setCookie(this.cookieName, 'suppress_for_all_services', { days: 30 });
    this.$module.classList.add('js-hidden');
  },
};

export default UserResearchBanner;
