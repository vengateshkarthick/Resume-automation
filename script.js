var Certifications=[];
        var Interest=[];
        var Skills=[];
        var Hobbies=[];
        var ExtraAct=[];
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#yourphoto').attr('src', e.target.result);
                    
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        
        function setResumeValues(Name,Address,Ed,Lists,obj,mail,phno){
            document.getElementById("Name-name").innerText=`${Name.FName} ${Name.LName}`;
            document.getElementById("Objective matter").innerText=obj;
            document.getElementById("Name-Address-line1").innerText=Address.add1;
            document.getElementById("Name-Address-line2").innerText=Address.add2;
            document.getElementById("Name-Address-line3").innerText=Address.add3;
            document.getElementById("Name-Address-line4").innerText=Address.add4;
            document.getElementById("Name-contactInfo-mail").innerText=`Mailid: ${mail}`;
            document.getElementById("Name-contactInfo-Phno").innerText=`Phno: ${phno}`;
            
            
            document.getElementById("College-name").innerHTML=`<strong>${Ed.edCollegeName}</strong>`;
            document.getElementById("Degree-details").innerText=`Pursuing my ${Ed.edCollegeCourse} with ${Ed.edCollegeMark}CGPA (till recently conducted semester and expecting to complete the graduation by ${Ed.edCollegeYear})`
            
            if(Ed.edHigherSecondarySchool===Ed.edHighSchool){
                document.getElementById("School-name").innerHTML=`<strong>${Ed.edHigherSecondarySchool}</strong>`;
                document.getElementById("School-details").innerText=`Passed 12th std with ${Ed.edHigherSecondaryMark} in ${Ed.edHigherSecondaryYear} and 10th std with ${Ed.edHighMark} in ${Ed.edHighYear}`;
            }
            else{
                document.getElementById("School-name").innerHTML=`<strong>${Ed.edHigherSecondarySchool}</strong>`;
                document.getElementById("School-details").innerText=`Passed 12th std with ${Ed.edHigherSecondaryMark} in ${Ed.edHigherSecondaryYear} `;
                document.getElementById("School-name").innerHTML=`<strong>${Ed.edHighSchool}</strong>`;
                document.getElementById("School-details").innerText=`Passed 10th std with ${Ed.edHighMark} in ${Ed.edHighYear}`;

            }
            for (let i = 0; i < ExtraAct.length; i++) {
                    let list1=document.createElement("li");

                    list1.innerText=ExtraAct[i];
                   Lists.extraList.appendChild(list1);
                    }
            for (let i = 0; i < Hobbies.length; i++) {
                    let list2=document.createElement("li");
                
                    list2.innerText=Hobbies[i];
                   Lists.hobbiesList.appendChild(list2);
                    }
            for (let i = 0; i < Certifications.length; i++) {
                    let list3=document.createElement("li");

                    var newString=Certifications[i]
                    var newVal=newString.split(" ");
                    list3.innerText=`${newVal[0]} provided by ${newVal[1]}`;
                    Lists.CertifyList.appendChild(list3);
                    }
            for (let j = 0; j < Skills.length; j++) {
                    let list=document.createElement("li");
                
                    list.innerText=Skills[j];
                   Lists.skillList.appendChild(list);
                    }
            for (let i = 0; i < Interest.length; i++) {
                    let list=document.createElement("li");
                
                    list.innerText=Interest[i];
                    Lists.IntrList.appendChild(list);
                    }
                    printMyresume()
        }
        function printMyresume(){
            document.getElementById("Entryform").style.display="none";
            document.getElementById("main").style.display="none";

            document.getElementById("my-resume").style.display="block";
            document.getElementById("readyForPrint").style.cursor="default";

            window.print();
            document.getElementById("my-resume").style.display="none";

            location.reload();
            
        }
        function getResumeValues(){
            document.getElementById("readyForPrint").style.cursor="progress";
            // getting values as per the ID declared
            var n1=document.getElementById("Contact-Name-First").value;
            var n2=document.getElementById("Contact-Name-Iinitial").value;
            var add1=document.getElementById("Contact-Address-line1").value;
            var add2=document.getElementById("Contact-Address-line2").value;
            var add3=document.getElementById("Contact-Address-line3").value;
            var add4=document.getElementById("Contact-Address-line4").value;
            var mail=document.getElementById("Contact-Mail").value;
            var phno=document.getElementById("Contact-Phno").value;
            
          
            var obj=document.getElementById("Objective").value;
            
            var edCollegeName=document.getElementById("Education-College-Name").value;
            var edCollegeCourse=document.getElementById("Education-College-Degree").value;
            var edCollegeMark=document.getElementById("Education-College-Mark").value;
            var edCollegeYear=document.getElementById("Education-College-Year").value;
            var edHigherSecondarySchool=document.getElementById("Education-XII-School").value;
            var edHigherSecondaryMark=document.getElementById("Education-XII-Mark").value;
            var edHigherSecondaryYear=document.getElementById("Education-XII-Year").value;
            var edHighSchool=document.getElementById("Education-X-School").value;
            var edHighMark=document.getElementById("Education-X-Mark").value;
            var edHighYear=document.getElementById("Education-X-Year").value;
            var extraList= document.getElementById("ExtraCuricullar-list");
            var hobbiesList= document.getElementById("Hobbies-list");
            var skillList= document.getElementById("Skills-list");          
            var CertifyList= document.getElementById("Certification-list");
            var IntrList= document.getElementById("Interest-list");
            if(
            ((n1 !==null && n1 !==" "))  &&  ((n2 !==null && n2 !==" "))
             && ((add1 !==null  &&  add1 !==" ") && (add2 !==null && add2 !==" ") && (add3 !==null && add3 !==" ") && (add4 !==null && add4 !==" "))
             && ((edCollegeName !==null && edCollegeName !==" ") && (edCollegeCourse !==null && edCollegeCourse !==" ") && (edCollegeMark !==null && edCollegeMark !==" "))
             && ((edHighSchool !==" " && edHighSchool !==null) && (edHighYear !==null && edHighYear !==" ") && (edHighMark !==null && edHighMark !==" "))
             && ((edHigherSecondarySchool !==null && edHigherSecondarySchool !==" ") && (edHigherSecondaryYear !==null && edHigherSecondaryYear !==" ") && (edHigherSecondaryMark !==null && edHigherSecondaryMark !==" "))
             && (obj !==null && phno !==null && mail !==null))
            {
                            setResumeValues( {FName:n1,LName:n2},
                        {
                            add1,
                            add2,
                            add3,
                            add4
                        },
                        {
                            edCollegeName,
                            edCollegeCourse,
                            edCollegeMark,
                            edCollegeYear,
                            edHigherSecondarySchool,
                            edHigherSecondaryMark,
                            edHigherSecondaryYear,
                            edHighSchool,
                            edHighMark,
                            edHighYear

                        },
                        {
                            skillList,
                            IntrList,
                            hobbiesList,
                            CertifyList,
                            extraList

                        },
                        obj,mail,phno
                        );

            }
            
            else{

                window.alert("Don't leave anything empty")
            }
            
        }
        function addSkills(e) {
                        if(Skills.length<4){
                                var newSpan=document.createElement("span");
                                newSpan.className="entries-list";
                                var newCrt=document.getElementById("Skills");
                                let x=newCrt.value;
                                if(x.length==1 || x==null){
                                windw.alert("Don't add empty values");
                                return;
                                }
                                newCrt.value=null
                                Skills.push(x);
                                newSpan.innerText=`${x}`;
                                var parent=e.parentNode;
                                parent.append(newSpan)
                        }
            else{
                e.style.filter="opacity(30%)";
                let nxt=e.parentNode.nextElementSibling;
                nxt.style.display="block";
                e.preventDefault();
            
            }
    }
    function addExtraActivities(e){
        if(ExtraAct.length<3){
                        var newSpan=document.createElement("span");
                        newSpan.className="entries-list";
                        var newCrt=document.getElementById("ExtraCuricular-Activities");
                        let x=newCrt.value;
                        if( x.length==1 || x==null || x===" "  ){
                                windw.alert("Don't add empty values");
                                return;
                                }
                        newCrt.value=null
                        ExtraAct.push(x);
                        
                        newSpan.innerText=`${x}`;
                        var parent=e.parentNode;
                        parent.append(newSpan)
                }
    else{
        e.style.filter="opacity(30%)";
        let nxt=e.parentNode.nextElementSibling;
        nxt.style.display="block";
        e.preventDefault();
        
        }
    }
    function addHobby(e) {
        if(Hobbies.length<2){
                        var newSpan=document.createElement("span");
                        newSpan.className="entries-list";
                        var newCrt=document.getElementById("Hobby-Intr-details");
                        let x=newCrt.value;
                        if( x.length==1 || x==null || x===" "  ){
                                windw.alert("Don't add empty values");
                                
                                return;
                                }
                        newCrt.value=null
                        Hobbies.push(x);
                        
                        newSpan.innerText=`${x}`;
                        var parent=e.parentNode;
                        parent.append(newSpan)
                        }
        else{
            e.style.filter="opacity(30%)";
            let nxt=e.parentNode.nextElementSibling;
            nxt.style.display="block";
            e.preventDefault();
            
            }
    }
    function addCertifications(e) {
        if(Certifications.length<4){
                        var newSpan=document.createElement("span");
                        newSpan.className="entries-list";
                        var newCrt=document.getElementById("Certification-details");
                        let x=newCrt.value;
                        if( x.length==1 || x==null || x===" "  ){
                                windw.alert("Don't add empty values");
                                return;
                                }
                        newCrt.value=null
                        Certifications.push(x);
                        newSpan.innerText=`${x}`;
                        var parent=e.parentNode;
                        parent.append(newSpan)
                }
    else{
        e.style.filter="opacity(30%)";
        let nxt=e.parentNode.nextElementSibling;
        nxt.style.display="block";
        e.preventDefault();       

        }
    }
    function addInterest(e) {
        if(Interest.length<3){
                        var newSpan=document.createElement("span");
                        newSpan.className="entries-list";
                        var newCrt=document.getElementById("Interest-areas");
                        let x=newCrt.value;
                        if( x.length==1 || x==null || x===" "  ){
                                windw.alert("Don't add empty values");
                                return;
                                }
                        newCrt.value=null
                        Interest.push(x);
                        newSpan.innerText=x;
                        var parent=e.parentNode;
                        parent.append(newSpan)
                        }
        else{
            e.style.filter="opacity(30%)";
            let nxt=e.parentNode.nextElementSibling;
            nxt.style.display="block";
            e.preventDefault();     

        }
    }

    
    function setDisplay(viewMedia) {
            if (viewMedia.matches) { 
                const inpt=document.getElementById("Objective")
                inpt.setAttribute("cols",'25')
            }
        }

    var getMobileView = window.matchMedia("(max-width: 700px)")
    setDisplay(getMobileView) 
    
    getMobileView.addListener(setDisplay)