(function($, Drupal, drupalSettings) {
  Drupal.behaviors.molloClient = {
    attach(context, settings) {
      console.log("Mollo Address Book");

        $('#mollo-address', context)
          .once('mollo-address')
          .each(() => {});

    },
  };
})(jQuery, Drupal, drupalSettings);
