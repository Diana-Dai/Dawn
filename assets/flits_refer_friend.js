
/****PLEASE DON'T MAKE CHANGES IN THIS FILE IT'S AFFECT THE CODE IF YOU NEED ANY HELP PLEASE CONTACT TO FLITS TEAM support@getflits.com ****/
(function(Flits,referFriend){referFriend=Flits.referFriend=function(options){Flits.referFriend.settings={};var settings={isNewToReferral:!1};settings=Flits.extend(Flits.referFriend.settings,settings,options),Flits.dispatchEvent('Flits:referFriend:Loaded',{settings:settings});var referModal=new flits_tingle.modal({footer:!1,stickyFooter:!1,getContent:!0,closeMethods:['button'],closeLabel:'Close',beforeClose:function(){return!0;}});if(!(Flits.isNull(Flits.getURLParameter('flits_refer_code'))&&Flits.isNull(Flits.getCookie('flits-referral-code')))&&Flits.customer_id==-1&&(Flits.referFriend.settings.isNewToReferral=!0),Flits.referFriend.settings.isNewToReferral){let referralCode=null;let flitsInviterName='';Flits.isNull(Flits.getURLParameter('flits_refer_code'))||(referralCode=atob(Flits.getURLParameter('flits_refer_code')),Flits.setCookie('flits-referral-code',referralCode,1)),Flits.isNull(Flits.getURLParameter('flits_inviter_name'))||(flitsInviterName=atob(Flits.getURLParameter('flits_inviter_name')),Flits.setCookie('flits-inviter-name',flitsInviterName,1)),Flits.isNull(Flits.getCookie('flits-referral-code'))||(referralCode=Flits.getCookie('flits-referral-code')),Flits.isNull(Flits.getCookie('flits-inviter-name'))||(flitsInviterName=Flits.getCookie('flits-inviter-name'));let isPopupClosed=!Flits.isNull(Flits.getCookie('flits-referral-popup-closed'));if(!isPopupClosed){let contentText=Flits.t('Flits.locals.refer_friend_page.popup_message','You were referred by {{ inviter_name }}. Please help us in giving you credit by signing up here.').replace('{{ inviter_name }}',flitsInviterName);Flits.setCookie('flits-referral-popup-closed','1',1);let referModalContent=Flits('#flits-referral-modal').clone();Flits(referModalContent).find('.flits-refer-content').html(contentText),referModal.setContent(Flits(referModalContent).html()),referModal.open(),Flits.dispatchEvent('Flits:referFriend:ModalOpen');}let allSocialLoginBtns=Flits('.flits-social-login-btn');for(var i=0;i<allSocialLoginBtns.length;i++)allSocialLoginBtns[i].href+='&flits_refer_code='+referralCode;let registerForm=Flits('form[method="post"][action="/account"]');if(registerForm){let flitsReferralCode=Flits('<input/>');flitsReferralCode.attr('type','hidden'),flitsReferralCode.attr('name','customer[note][flits_referral_code]'),flitsReferralCode.attr('value',referralCode),Flits(registerForm).find('[name="customer[note][flits_referral_code]"]').length?Flits(registerForm).find('[name="customer[note][flits_referral_code]"]').val(referralCode):Flits(registerForm).append(flitsReferralCode);}window.history.replaceState({},document.title,location.protocol+'//'+location.host+location.pathname);}Flits.customer_id!=-1&&Flits.setCookie('flits-referral-code','',-1);},Flits.referFriend();}(Flits));