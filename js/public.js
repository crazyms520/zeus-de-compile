
 $(function() {

	// navbar start
	$('.brand-origin-show').click(function() {
		// 20230309 母親節活動 拿掉 #drunk-star start
		$('#happy-skin, #special-feature, #special-offer, #where-buy').hide();
		// 20230309 母親節活動 拿掉 #drunk-star end

		// 20230309 母親節活動 拿掉 drunk_color start
		$('.navbar').removeClass('spceial_color where_color');
		// 20230309 母親節活動 拿掉 drunk_color end
		$('.navbar').addClass('origin_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#brand-origin').show("slide", { direction: "left" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-right-3 slide-left');

		$('.brand-origin-slide-1').addClass('slide-right');	
		$('.brand-origin-slide').addClass('slide-right-2')
		$('.brand-origin-slide-2').addClass('slide-left');	
		$('.brand-origin-slide-3').addClass('slide-up');
	})

	$('.happy-skin-show').click(function() {
		// 20230309 母親節活動 拿掉 #drunk-star start
		$('#brand-origin, #special-feature, #special-offer, #where-buy').hide();
		// 20230309 母親節活動 拿掉 #drunk-star end

		// 20230309 母親節活動 拿掉 drunk_color start
		$('.navbar').removeClass('spceial_color origin_color where_color');
		// 20230309 母親節活動 拿掉 drunk_color end
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#happy-skin').show("slide", { direction: "down" }, 10);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-right-3 slide-left');

		$('.happy-skin-title-slide-up').addClass('slide-up');	
		$('.happy-skin-item1-slide-up').addClass('slide-up');	
		$('.happy-skin-item2-slide-up').addClass('slide-up');	
	})

	$('.special-feature-show').click(function() {
		// 20230309 母親節活動 拿掉 #drunk-star start
		$('#brand-origin, #happy-skin, #special-offer, #where-buy').hide();
		// 20230309 母親節活動 拿掉 #drunk-star end

		// 20230309 母親節活動 拿掉 drunk_color start
		$('.navbar').removeClass('origin_color where_color');
		// 20230309 母親節活動 拿掉 drunk_color end
		$('.navbar').addClass('spceial_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#special-feature').show("slide", { direction: "right" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-right-3 slide-left');
		$('.special-feature-title-slide-up').addClass('slide-up-2')
		$('.special-feature-item-slide-up').addClass('slide-up')
	})

	$('.special-offer-show').click(function() {
		// 20230309 母親節活動 拿掉 #drunk-star start
		$('#brand-origin, #happy-skin, #special-feature, #where-buy').hide();
		// 20230309 母親節活動 拿掉 #drunk-star end

		// 20230309 母親節活動 拿掉 drunk_color start
		$('.navbar').removeClass('origin_color where_color');
		// 20230309 母親節活動 拿掉 drunk_color end
		$('.navbar').addClass('spceial_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#special-offer').show("slide", { direction: "right" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-right-3 slide-left');
	})

	$('.where-buy-show').click(function() {
		// 20230309 母親節活動 拿掉 #drunk-star start
		$('#brand-origin, #happy-skin, #special-feature, #special-offer').hide();
		// 20230309 母親節活動 拿掉 #drunk-star end

		// 20230309 母親節活動 拿掉 drunk_color start
		$('.navbar').removeClass('origin_color spceial_color');
		// 20230309 母親節活動 拿掉 drunk_color end
		$('.navbar').addClass('where_color');
		$('.nav-link').removeClass('active');
		$(this).find('.nav-link').addClass('active');
		$('#where-buy').show("slide", { direction: "right" }, 400);
		$('*').removeClass('slide-up slide-up-2 slide-right slide-right-2 slide-right-3 slide-left');
	})

	// 20230309 母親節活動 拿掉醉神區塊 start
	// 20230309 母親節活動 拿掉醉神區塊 end

	// navbar end
	// 20230309 母親節活動 新增按鈕導致表單區塊 start
	$('.btn_1').on('click', function() {
		let top = $('.form').offset().top;
		$('html,body').animate({
			scrollTop: top,
		}, 700)
	})
	// 20230309 母親節活動 新增按鈕導致表單區塊 end

	// 20230309 母親節活動 拿掉醉神區塊 start
	// 20230309 母親節活動 拿掉醉神區塊 end 
	 
	// elephant slick start
	$('.slick-items').slick({
		infinite: true,
		slidesToShow: 4,
  		slidesToScroll: 1,
		prevArrow:"<img class='slick-prev' src='img/arrow_l.svg'>",
      	nextArrow:"<img class='slick-next' src='img/arrow_r.svg'>",
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	// elephant slick end
	
	// web btn click start
	$('.btn_w').click(function() {
		$(".modal_mask").show();
		$('.modal_content_hover').hide();
		$(this).parents('.item').find('.modal_content_hover').show();
		$(".modal_mask").click(function() {
			$(".modal_mask").hide();
			$('.modal_content_hover').hide();	
		})
	});
	// web btn click end

	// mobile btn click start
	$('.btn_m').click(function() {
		let content = $(this).parents('.item').find('.modal_content_hover');
		let color = content.attr('data-ph');
		let ph = content.find('.modal_ph_hover').text();
		let title = content.find('.modal_title_hover').text();
		let effect = content.find('.modal_effect_hover').text();
		let text = content.find('.modal_text_hover').html();
		let oldColor = $('.modal_content_mobile').attr('data-ph'); 

		$('.modal_ph_mobile').removeClass(oldColor);
		$('.modal_ph_mobile').addClass(color);
		$('.modal_ph_mobile').text(ph);
		$('.modal_title_mobile').text(title);
		$('.modal_effect_mobile').removeClass(oldColor);
		$('.modal_effect_mobile').addClass(color);
		$('.modal_effect_mobile').text(effect);
		$('.modal_text_mobile').html(text);

		$('.modal_content_mobile').attr('data-ph', color);
		$(".modal_mask").show();
		$('.modal_content_mobile').show();

		$(".modal_mask").click(function() {
			$(".modal_mask").hide();
			$('.modal_content_mobile').hide();	
		})
	})
	// mobile btn click end
	
	// animation start
	$(window).scroll(function() {
		var windowSize = $(window).width();
		var scroll = $(window).scrollTop();

		if(windowSize > 768) {
			// brand-origin 		
			if($('#brand-origin').css('display') !== 'none') {
				if(scroll > $('.navbar').offset().top - 200) {
					$('.brand-origin-slide-1').addClass('slide-right');	
					$('.brand-origin-slide').addClass('slide-right-2')
					$('.brand-origin-slide-2').addClass('slide-left');	
					$('.brand-origin-slide-3').addClass('slide-up');	
				}
			}

			// happy-skin
			if($('#happy-skin').css('display') != 'none') {
				if(scroll > $('.navbar').offset().top - 300) {
					$('.happy-skin-title-slide-up').addClass('slide-up');	
					$('.happy-skin-item1-slide-up').addClass('slide-up');	
					$('.happy-skin-item2-slide-up').addClass('slide-up');	
				}
			}

			// special-feature
			if($('#special-feature').css('display') != 'none') {
				if(scroll > $('.navbar').offset().top - 200) {
					$('.special-feature-title-slide-up').addClass('slide-up-2')
				}

				if(scroll > $('.special-feature-title-slide-up').offset().top) {
					$('.special-feature-item-slide-up').addClass('slide-up')
				}
			}

			// mixing
			if(scroll > $('.mixing').offset().top - 200) {
				$('.hand').addClass('fade-in');
				$('.mixing-title-slide-up-1').addClass('fade-in');
				$('.mixing-title-slide-up-2').addClass('fade-in');			
			}

			// elephant 
			if(scroll > $('.elephant').offset().top){
				$(".slick-items").addClass('slide-right-3')
			}

			//form 
			if(scroll > $('.form').offset().top - 200){
				$(".form-slide-up-item").addClass('slide-up')
			}
		} else {
			// brand-origin 
			if($('#brand-origin').css('display') !== 'none') {
				if(scroll > $('.navbar').offset().top - 460) {
					$('.brand-origin-slide-1').addClass('slide-right');	
					$('.brand-origin-slide').addClass('slide-right-2')
					$('.brand-origin-slide-2').addClass('slide-left');	
					$('.brand-origin-slide-3').addClass('slide-up');	
				}
			}
			// happy-skin
			if($('#happy-skin').css('display') != 'none') {
				if(scroll > $('.navbar').offset().top - 350) {
					$('.happy-skin-title-slide-up').addClass('slide-up');	
					$('.happy-skin-item1-slide-up').addClass('slide-up');	
					$('.happy-skin-item2-slide-up').addClass('slide-up');	
				}
			}

			// special-feature
			if($('#special-feature').css('display') != 'none') {
				if(scroll > $('.navbar').offset().top - 350) {
					$('.special-feature-title-slide-up').addClass('slide-up-2')
					$('.special-feature-item-slide-up').addClass('slide-up')
				}
			}

			// mixing
			if(scroll > $('.mixing').offset().top - 360) {
				$('.hand').addClass('fade-in');
				$('.mixing-title-slide-up-1').addClass('fade-in');
				$('.mixing-title-slide-up-2').addClass('fade-in');			
			}

			// elephant 
			if(scroll > $('.elephant').offset().top - 350){
				$(".slick-items").addClass('slide-right-3')
			}

			//form 
			if(scroll > $('.elephant').offset().top){
				$(".form-slide-up-item").addClass('slide-up')
			}	
		}
	})
	// animation end
});
