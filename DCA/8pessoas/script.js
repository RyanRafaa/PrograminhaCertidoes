const btn =document.querySelector("#send");


/* CNDT */
btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name");
    const cpf = document.querySelector("#cpf");
    
    
    const cndt = document.querySelector("#cndt")
    const ecndt = document.querySelector("#ecndt")
    const vcndt = document.querySelector("#vcndt")
    const cnat = document.querySelector("#cnat")
    const ecnat = document.querySelector("#ecnat")
    const rf = document.querySelector("#rf")
    const erf = document.querySelector("#erf")
    const vrf = document.querySelector("#vrf")
    const re = document.querySelector("#re")
    const ere = document.querySelector("#ere")
    const vre = document.querySelector("#vre")
    const regiao = document.querySelector("#regiao")
    const eregiao = document.querySelector("#eregiao")
    const regiaoc = document.querySelector("#regiaoc")
    
    const cpfp = cpf.value;
    const nomep = name.value;
    const cndtn = cndt.value
    const ecndtn = ecndt.value
    const vcndtn = vcndt.value
    const cnatn = cnat.value
    const ecnatn = ecnat.value
    const rfn = rf.value
    const erfn = erf.value
    const vrfn = vrf.value
    const ren = re.value
    const eren = ere.value
    const vren = vre.value
    const regiaon = regiao.value
    const eregiaon = eregiao.value
    const regiaocn = regiaoc.value
    /*2PESSOAS*/
    const name2 = document.querySelector("#name2");
    const cpf2 = document.querySelector("#cpf2");
    
    
    const cndt2 = document.querySelector("#cndt2")
    const cnat2 = document.querySelector("#cnat2")
    const rf2 = document.querySelector("#rf2")
    const re2 = document.querySelector("#re2")
    const regiao2 = document.querySelector("#regiao2")
    const regiaoc2 = document.querySelector("#regiaoc2")
    
    const cpfp2 = cpf2.value;
    const nomep2 = name2.value;
    const cndtn2 = cndt2.value
    const cnatn2 = cnat2.value
    const rfn2 = rf2.value
    const ren2 = re2.value
    const regiaon2 = regiao2.value
    const regiaocn2 = regiaoc2.value

    /*3PESSOAS*/
    const name3 = document.querySelector("#name3");
    const cpf3 = document.querySelector("#cpf3");
    
    
    const cndt3 = document.querySelector("#cndt3")
    const cnat3 = document.querySelector("#cnat3")
    const rf3 = document.querySelector("#rf3")
    const re3 = document.querySelector("#re3")
    const regiao3 = document.querySelector("#regiao3")
    const regiaoc3 = document.querySelector("#regiaoc3")
    
    const cpfp3 = cpf3.value;
    const nomep3 = name3.value;
    const cndtn3 = cndt3.value
    const cnatn3 = cnat3.value
    const rfn3 = rf3.value
    const ren3 = re3.value
    const regiaon3 = regiao3.value
    const regiaocn3 = regiaoc3.value
    
    /*4PESSOAS*/
    const name4 = document.querySelector("#name4");
    const cpf4 = document.querySelector("#cpf4");


    const cndt4 = document.querySelector("#cndt4")
    const cnat4 = document.querySelector("#cnat4")
    const rf4 = document.querySelector("#rf4")
    const re4 = document.querySelector("#re4")
    const regiao4 = document.querySelector("#regiao4")
    const regiaoc4 = document.querySelector("#regiaoc4")

    const cpfp4 = cpf4.value;
    const nomep4 = name4.value;
    const cndtn4 = cndt4.value
    const cnatn4 = cnat4.value
    const rfn4 = rf4.value
    const ren4 = re4.value
    const regiaon4 = regiao4.value
    const regiaocn4 = regiaoc4.value
    
    /*5PESSOAS*/
    const name5 = document.querySelector("#name5");
    const cpf5 = document.querySelector("#cpf5");


    const cndt5 = document.querySelector("#cndt5")
    const cnat5 = document.querySelector("#cnat5")
    const rf5 = document.querySelector("#rf5")
    const re5 = document.querySelector("#re5")
    const regiao5 = document.querySelector("#regiao5")
    const regiaoc5 = document.querySelector("#regiaoc5")

    const cpfp5 = cpf5.value;
    const nomep5 = name5.value;
    const cndtn5 = cndt5.value
    const cnatn5 = cnat5.value
    const rfn5 = rf5.value
    const ren5 = re5.value
    const regiaon5 = regiao5.value
    const regiaocn5 = regiaoc5.value

    /*6PESSOAS*/
    const name6 = document.querySelector("#name6");
    const cpf6 = document.querySelector("#cpf6");


    const cndt6 = document.querySelector("#cndt6")
    const cnat6 = document.querySelector("#cnat6")
    const rf6 = document.querySelector("#rf6")
    const re6 = document.querySelector("#re6")
    const regiao6 = document.querySelector("#regiao6")
    const regiaoc6 = document.querySelector("#regiaoc6")

    const cpfp6 = cpf6.value;
    const nomep6 = name6.value;
    const cndtn6 = cndt6.value
    const cnatn6 = cnat6.value
    const rfn6 = rf6.value
    const ren6 = re6.value
    const regiaon6 = regiao6.value
    const regiaocn6 = regiaoc6.value

    
    /*7PESSOAS*/
    const name7 = document.querySelector("#name7");
    const cpf7 = document.querySelector("#cpf7");


    const cndt7 = document.querySelector("#cndt7")
    const cnat7 = document.querySelector("#cnat7")
    const rf7 = document.querySelector("#rf7")
    const re7 = document.querySelector("#re7")
    const regiao7 = document.querySelector("#regiao7")
    const regiaoc7 = document.querySelector("#regiaoc7")

    const cpfp7 = cpf7.value;
    const nomep7 = name7.value;
    const cndtn7 = cndt7.value
    const cnatn7 = cnat7.value
    const rfn7 = rf7.value
    const ren7 = re7.value
    const regiaon7 = regiao7.value
    const regiaocn7 = regiaoc7.value

    /*8PESSOAS*/
    const name8 = document.querySelector("#name8");
    const cpf8 = document.querySelector("#cpf8");


    const cndt8 = document.querySelector("#cndt8")
    const cnat8 = document.querySelector("#cnat8")
    const rf8 = document.querySelector("#rf8")
    const re8 = document.querySelector("#re8")
    const regiao8 = document.querySelector("#regiao8")
    const regiaoc8 = document.querySelector("#regiaoc8")

    const cpfp8 = cpf8.value;
    const nomep8 = name8.value;
    const cndtn8 = cndt8.value
    const cnatn8 = cnat8.value
    const rfn8 = rf8.value
    const ren8 = re8.value
    const regiaon8 = regiao8.value
    const regiaocn8 = regiaoc8.value


  
  texto.innerHTML = ("b)- Certid??o negativa de d??bitos trabalhistas - CNDT sob n?? "+cndtn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", n?? "+cndtn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", n?? "+cndtn3+" para o CPF n?? "+cpfp3+" em nome de "+nomep3+", n?? "+cndtn4+" para o CPF n?? "+cpfp4+" em nome de "+nomep4+", n?? "+cndtn5+" para o CPF n?? "+cpfp5+" em nome de "+nomep5+", n?? "+cndtn6+" para o CPF n?? "+cpfp6+" em nome de "+nomep6+", n?? "+cndtn7+" para o CPF n?? "+cpfp7+" em nome de "+nomep7+" e n?? "+cndtn8+" para o CPF n?? "+cpfp8+" em nome de "+nomep8+", emitidas gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecndtn+", v??lidas at?? "+vcndtn+"; c)- Certid??o negativa de a????es trabalhistas do 1?? Grau, do Tribunal Regional do Trabalho da 9?? Regi??o, sob n?? "+cnatn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", n?? "+cnatn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", n?? "+cnatn3+" para o CPF n?? "+cpfp3+" em nome de "+nomep3+", n?? "+cnatn4+" para o CPF n?? "+cpfp4+" em nome de "+nomep4+", n?? "+cnatn5+" para o CPF n?? "+cpfp5+" em nome de "+nomep5+", n?? "+cnatn6+" para o CPF n?? "+cpfp6+" em nome de "+nomep6+", n?? "+cnatn7+" para o CPF n?? "+cpfp7+" em nome de "+nomep7+" e n?? "+cnatn8+" para o CPF n?? "+cpfp8+" em nome de "+nomep8+", emitidas gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecnatn+", v??lidas por 30 dias; d)- Certid??o negativa de d??bitos relativos aos tributos federais e ?? d??vida ativa da Uni??o, com o c??digo de controle "+rfn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", "+rfn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", "+rfn3+" para o CPF n?? "+cpfp3+" em nome de "+nomep3+", "+rfn4+" para o CPF n?? "+cpfp4+" em nome de "+nomep4+", "+rfn5+" para o CPF n?? "+cpfp5+" em nome de "+nomep5+", "+rfn6+" para o CPF n?? "+cpfp6+" em nome de "+nomep6+", "+rfn7+" para o CPF n?? "+cpfp7+" em nome de "+nomep7+" e "+rfn8+" para o CPF n?? "+cpfp8+" em nome de "+nomep8+", emitidas gratuitamente, via internet, pelo Minist??rio da Fazenda, Secretaria da Receita Federal do Brasil, Procuradoria-Geral da Fazenda Nacional, em "+erfn+", v??lidas at?? "+vrfn+", a qual teve sua autenticidade confirmada e fica arquivada ??s folhas XXX, na Pasta de Arquivo de CND n?? XXX, neste Tabelionato; e)- Certid??o negativa de d??bitos tribut??rios e de d??vida ativa estadual, sob n?? "+ren+" para o CPF n?? "+cpfp+" em nome de "+nomep+", n?? "+ren2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", n?? "+ren3+" para o CPF n?? "+cpfp3+" em nome de "+nomep3+", n?? "+ren4+" para o CPF n?? "+cpfp4+" em nome de "+nomep4+", n?? "+ren5+" para o CPF n?? "+cpfp5+" em nome de "+nomep5+", n?? "+ren6+" para o CPF n?? "+cpfp6+" em nome de "+nomep6+", n?? "+ren7+" para o CPF n?? "+cpfp7+" em nome de "+nomep7+" e n?? "+ren8+" para o CPF n?? "+cpfp8+" em nome de "+nomep8+", emitidas via internet, pela Secretaria de Estado da Fazenda, Receita Estadual do Paran??, em "+eren+", v??lidas at?? "+vren+"; f)- Certid??es negativas de distribui????o de a????es e execu????es c??veis e fiscais, e de execu????es criminais da Justi??a Federal da 4?? regi??o, sob o n?? "+regiaon+" e "+regiaocn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", n?? "+regiaon2+" e "+regiaocn2+" para o CPF n?? "+cpfp2+" em nome de "+nomep2+", n?? "+regiaon3+" e "+regiaocn3+" para o CPF n?? "+cpfp3+" em nome de "+nomep3+", n?? "+regiaon4+" e "+regiaocn4+" para o CPF n?? "+cpfp4+" em nome de "+nomep4+", n?? "+regiaon5+" e "+regiaocn5+" para o CPF n?? "+cpfp5+" em nome de "+nomep5+", n?? "+regiaon6+" e "+regiaocn6+" para o CPF n?? "+cpfp6+" em nome de "+nomep6+", n?? "+regiaon7+" e "+regiaocn7+" para o CPF n?? "+cpfp7+" em nome de "+nomep7+" e n?? "+regiaon8+" e "+regiaocn8+" para o CPF n?? "+cpfp8+" em nome de "+nomep8+", emitidas via internet, em "+eregiaon+";")

  /*console.log( "Certid??o negativa de d??bitos trabalhistas - CNDT sob n?? "+cndtn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecndtn+", v??lida at?? "+vcndtn+";");
  console.log( "Certid??o negativa de a????es trabalhistas do 1?? Grau, do Tribunal Regional do Trabalho da 9?? Regi??o, sob n?? "+cnatn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Poder Judici??rio, Justi??a do Trabalho, em "+ecnatn+", v??lida por 30 dias;");
  console.log( "Certid??o negativa de d??bitos relativos aos tributos federais e ?? d??vida ativa da Uni??o, com o c??digo de controle "+rfn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitida gratuitamente, via internet, pelo Minist??rio da Fazenda, Secretaria da Receita Federal do Brasil, Procuradoria-Geral da Fazenda Nacional, em "+erfn+", v??lida at?? "+vrfn+"; a qual teve sua autenticidade confirmada e fica arquivada ??s folhas XXX, na Pasta de Arquivo de CND n?? XXX, neste Tabelionato");
  console.log( "Certid??o negativa de d??bitos tribut??rios e de d??vida ativa estadual, sob n?? "+ren+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitidas via internet, pela Secretaria de Estado da Fazenda, Receita Estadual do Paran??, em "+eren+", v??lida at?? "+vren+";");
  console.log( "Certid??es negativas de distribui????o de a????es e execu????es c??veis e fiscais, e de execu????es criminais da Justi??a Federal da 4?? regi??o, sob o n?? "+regiaon+" e "+regiaocn+" para o CPF n?? "+cpfp+" em nome de "+nomep+", emitidas via internet, em "+eregiaon+";");*/

})


let texto = document.querySelector("#texto")

