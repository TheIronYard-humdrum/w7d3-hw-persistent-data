import $ from 'jquery'

class Validate {
    constructor (original) {
      original = original || {};
      this.name = this.name(original.sender);
      this.email = this.email(original.email);
      this.website = this.website(original.website);
      this.message = this.message(original.message);
    }

    name(input) {
      if ( input === undefined ) {
        //errored
        input = false
        let name = $('.sender-error');
        let nameInput = $('.sender-error-border');
        name.removeClass('hidden');
        nameInput.addClass('error-border');
      } else {
        //not errored
        let name = $('.sender-error');
        let nameInput = $('.sender-error-border');
        name.addClass('hidden');
        nameInput.removeClass('error-border');
      }
      return input;
    }


    email(input) {
      if ( input === undefined || input.includes('@') === false ) {
        input = false
        // errored
        let email = $('.email-error');
        email.removeClass('hidden');
        let emailInput = $('.email-error-border');
        emailInput.addClass('error-border');
      } else {
        // not errored
        let email = $('.email-error');
        email.addClass('hidden');
        let emailInput = $('.email-error-border');
        emailInput.removeClass('error-border');
      }
      return input;
    }

    website(input) { 
      if ( input === undefined) {
        input = false
      } else if ( input.slice(0,7) !== "http://" ) {
        input = false;
      }
      if ( input === false ) {
        // errored
        let website = $('.website-error');
        website.removeClass('hidden');
        let websiteInput = $('.website-error-border');
        websiteInput.addClass('error-border');
      } else {
        // not errored
        let website = $('.website-error');
        website.addClass('hidden');
        let websiteInput = $('.website-error-border');
        websiteInput.removeClass('error-border');
      }
      return input
    }

    message(input) {
      if ( input === undefined ) {
        input = false
        // errored
        let message = $('.message-error');
        message.removeClass('hidden');
        let messageInput = $('.message-error-border');
        messageInput.addClass('error-border');
      } else {
        // not errored
        let message = $('.message-error');
        message.addClass('hidden');
        let messageInput = $('.message-error-border');
        messageInput.removeClass('error-border');
      }
      return input
    }

  }

  export { Validate }