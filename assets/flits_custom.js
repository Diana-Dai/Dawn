
/****PLEASE DON'T MAKE CHANGES IN THIS FILE IT'S AFFECT THE CODE IF YOU NEED ANY HELP PLEASE CONTACT TO FLITS TEAM support@getflits.com ****/
(function(Flits) {
  /* To load js in all pages */
  if(Flits.Metafields.IS_SOCIAL_LOGIN_PAID && Flits.Metafields.IS_SOCIAL_LOGIN_ENABLE){
    Flits.LoadStyleScript('socialLoginJs',window.flitsObjects.allCssJs.socialLoginJs.url);
  }
  if(Flits.Metafields.IS_WISHLIST_PAID && Flits.Metafields.IS_WISHLIST_ENABLE){
    Flits.LoadStyleScript('wishlistJs',window.flitsObjects.allCssJs.wishlistJs.url);
  }
  if (Flits.request.page_type == 'collection' || Flits.request.page_type == 'index') {
    Flits(document).on('Flits:WishlistAutomaticCode:Loaded', function(event){  
      var data = event.detail;
      event.detail.cloneNode.css('display','none');
    });
  }
  
  Flits(document).on('Flits:wishlistButton:Loaded', function(event){ 
    var data = event.detail.settings;
    data.addtocartSelectors = ["#shopify-section-product-template form[action='/cart/add']"];
  });
  
  
  Flits(window).on('load',function(event) {
    setTimeout(function(){ 
      function wishListCollection() {
//Remove Below Condition if you wish to show it on Product page also 
        if (Flits.request.page_type == 'collection' || Flits.request.page_type == 'index') {
          let collectionBtn = Flits('.flits-wishlist-colection');
          parseInt(Flits.wishlistButton.settings.isCountEnable) && Flits(collectionBtn).find('.flits-wls-count-btn').css('display', 'flex'),
            Flits(collectionBtn).show(),
            Flits('.flits-wishlist-colection:not(.flits-template)').parent().attr('data-flits', 'wishlist-collection-parent');
        }
      }
      function wishlistLocalData() {
        var settings = {
            automaticAppendDivFunction: function() {},
            isWishlistAutomatic: 1,
            wslBtnType: 1,
            isCountEnable: 0,
            addtocartSelectors: ["form[action='/cart/add']"],
            wishListBtnDomSelector: 'flits-wishlist-dom',
            wishlist_base_url: '/wishlist',
            add_wsl_url: '/add_to_wishlist',
            remove_wsl_url: '/remove_from_wishlist',
            wishlistHandle: 'flits_wishlist_products',
            wishlistLastUpdate: 'last_wishlist_product_update',
            clicked_add_button: '',
            appearance_style: {
                before_heart_clr: '#000000',
                before_btn_clr: '#fff',
                before_text_clr: '#f5020f',
                before_border_clr: '#000000',
                after_heart_clr: '#fc0303',
                after_btn_clr: '#080707',
                after_text_clr: '#f5faf9',
                after_border_clr: '#f7f5fa',
                collection_before_heart_clr: '#000000',
                collection_after_heart_clr: '#fc0303'
            }
        };
        var wishlitsLocalHandles = Flits.getLocalStorage(Flits.wishlistButton.settings.wishlistHandle);
        if (wishlitsLocalHandles) {
          var wishlitsLocalHandlesArray = wishlitsLocalHandles.split(',');
          console.log(wishlitsLocalHandlesArray.length);
          for (var i = 0; i < wishlitsLocalHandlesArray.length; i++) {
            var s = Flits("*[data-flits-product-handle='" + wishlitsLocalHandlesArray[i] + "']");	
            var wishlitsLocalHandlesnew = Flits.getLocalStorage(Flits.wishlistButton.settings.wishlistHandle);
            var pro_handle = s.attr('data-flits-product-handle');
            if(Flits.isProductAddedInWishlist(pro_handle)){ 
              s.removeClass("flits-wls-inactive")
              s.addClass("flits-wls-active")
              s.attr("data-tippy-content",Flits.t('Flits.locals.wishlisted_product_page.remove_from_wishlist_button','Remove from Wishlist'));
            }     
          }
        }
      }
      wishlistLocalData();
      wishListCollection();
    }, 1000);
  });
}(Flits));
