function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main()
{
	var count = 0;
	while(document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body == null && count < 400);
	{
		await sleep(50);
		count++;
	} count = 0;
	if(document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body == null) return;
	document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body.setAttribute("onkeyup", "getPhone()");
	document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body.getPhone = function()
	{
		var str = document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body.innerText;
		if (str != null)
		{
			str = str.replace(/\./g,'').replace(/\,/g,'').replace(/ /g,'').replace(/[^0-9]/g,' ').replace(/ +(?= )/g,'');
		
		var dienthoai;
		for (i=0;i<1000;i++)
			{
				var vdigit = str.match(/(\d+)/gi);
				if (vdigit != null && vdigit[i] != null)
				if (vdigit[i].length>7 && vdigit[i].charAt(0)=='0')     
					{
						dienthoai = vdigit[i];
						break;
					}
			}
		//console.log(dienthoai);
		if(typeof(dienthoai)!= "undefined")
		document.querySelector("#homepage > div.uk-container.uk-container-center > div > div.uk-width-large-2-3 > section > section > form > div:nth-child(7) > div.content_content > div:nth-child(1) > div.label-right.uk-width-1-1.bdl0 > label > input").value = dienthoai;
		}
	}
}
main();
