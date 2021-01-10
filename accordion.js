(() => {

	class Accordion{
		// 初期化
		constructor(obj){

			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);
				
			const triggerLen = $trigger.length;
			let index = 0;
			while(index < triggerLen){
				// clickイベントを[0]にもたせて、実行後にclickHandlerが実行
				//クラス内で関数を指定する場合は「this.関数名」、thisはクラスを参照する
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));
				index++;
			}
		}

		// クリック後に実行される処理
		// クラスの中では「const」不要
		clickHandler = (e) => {
			e.preventDefault();
			// eオブジェクトの中のクリックされた要素を取得
			const $target = e.currentTarget;
			// [0]の次の$triggerを取得する
			const $content = $target .nextElementSibling;
			if($content.style.display === 'block'){
				$content.style.display = 'none';
			}else {
				$content.style.display = 'block';
			}
		}
	}

	// インスタンスの生成(必ず変数を指定)
	const dummyAccorion = new Accordion({
		hookName: '#js-faq',
		tagName: 'a'
	});

})();