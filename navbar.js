document.addEventListener('DOMContentLoaded',
	function () {
		const navItems = document
			.querySelectorAll('._nav78');

		navItems.forEach(item => {
			item.addEventListener('click',
				function () {
					navItems.forEach(navItem => navItem
						.classList.remove('active'));
					this.classList.add('active');
				});
		});
	});
