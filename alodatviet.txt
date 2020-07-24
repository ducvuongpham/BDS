async function main()
{
	await(document.getElementsByClassName("cke_wysiwyg_frame cke_reset")[0].contentWindow.document.body != null);
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
		console.log(dienthoai);
		}
	}
}

main();




