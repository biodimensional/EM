import { Publication,Authors } from './publications';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

// var _iCCU="Institute of Cardiology, Catholic University of the Sacred Heart, Rome, Italy";
var _iCCU="iccu";
// var _iODC="Fondazione Toscana G. Monasterio, Ospedale Del Cuore, Massa, Italy";
var _iODC="iodc";

var EM={id:1,name:"Eros", surname:"Montin",affiliation:"nyu"};
var RL={id:2,name:"Riccardo", surname:"Lattanzi",affiliation:"nyu"};
var CC={id:3,name:"Christopher", surname:"Collins",affiliation:"nyu"};
var GC={id:4,name:"Giuseppe", surname:"Carluccio",affiliation:"nyu"};
var RoWi={id:4,name:"Roy", surname:"Wiggins",affiliation:"nyu"};
var ToBl={id:4,name:"Tobias", surname:"Block",affiliation:"nyu"};




var Mle={id:4,name:"Marinella", surname:"Levi",affiliation:"poli"}
var OmAl={id:4,name:"Ombretta", surname:"Alessandro",affiliation:"int"}
var CCr={id:4,name:"Caterina", surname:"Credi",affiliation:"poli"}
var MaLe={id:4,name:"Mara", surname:"Lecchi",affiliation:"int"}
var AB={id:4,name:"Antonella", surname:"Belfatto",affiliation:"poli"};
var MB={id:4,name:"Marco", surname:"Bologna",affiliation:"poli"};
var SM={id:4,name:"Silvia", surname:"Meroni",affiliation:"int"};
var ClCa={id:4,name:"Claudia", surname:"Cavatorta",affiliation:"int"};
var EmPe={id:4,name:"Emilia", surname:"Pecori",affiliation:"int"};
var BaDi={id:4,name:"Barbara", surname:"Diletto",affiliation:"int"};
var MaMa={id:4,name:"Maura", surname:"Massimino",affiliation:"int"};
var MaO={id:4,name:"Maria Chiara", surname:"Oprandi",affiliation:"lnf"};
var GePo={id:4,name:"Geraldina", surname:"Poggi",affiliation:"lnf"};
var FA={id:4,name:"Filippo", surname:"Arrigoni",affiliation:"lnf"};
var DP={id:4,name:"Denis", surname:"Peruzzo",affiliation:"lnf"};
var EmPi={id:4,name:"Emanuele", surname:"Pignoli",affiliation:"int"};
var LG={id:4,name:"Lorenza", surname:"Gandola",affiliation:"int"};
var PC={id:4,name:"Pietro", surname:"Cerveri",affiliation:"poli"};
var LM={id:4,name:"Luca", surname:"Mainardi",affiliation:"poli"};
var VaCo={id:4,name:"Valentina", surname:"Corino",affiliation:"poli"};
var KaPa={id:4,name:"Katia", surname:"Passera",affiliation:"poli"};
var DzSe={id:4,name:"Dzemila", surname:"Sero",affiliation:"poli"};
var PP={id:4,name:"Paolo", surname:"Potepan",affiliation:"int"};


var LuBr={id:4,name:"Luca", surname:"Brambilla",affiliation:"int"};
var DaVe={id:4,name:"Daniele", surname:"Vergnaghi",affiliation:"int"};
var RGr={id:4,name:"R", surname:"Granata",affiliation:"int"};
var ECi={id:4,name:"E", surname:"Civelli",affiliation:"int"};
var AGi={id:4,name:"A", surname:"Gianluca",affiliation:"int"};

var SiCe={id:4,name:"Simona", surname:"Celi",affiliation:_iODC};


var MLe={id:4,name:"M", surname:"Lecchi",affiliation:""};
var FrSp= {id:4,name:"F", surname:"Spreafico",affiliation:"int"};
var ElSc= {id:4,name:"E", surname:"Schiavello",affiliation:"int"};
var PaVe = {id:4,name:"Paolo", surname:"Verderio",affiliation:"int"};
var VBi = {id:4,name:"V", surname:"Biassoni",affiliation:"int"};

var RaRa={id:4,name:"Rajiv", surname:"Rampat",affiliation:"poli"};
var RoFe={id:4,name:"Roberto", surname:"Fedele",affiliation:_iCCU};



var GiCa={id:4,name:"Giuseppina", surname:"Calareso",affiliation:"int"};
var CaRe={id:4,name:"Carlo", surname:"Resteghini",affiliation:"int"};
var SiSd={id:4,name:"Silvana", surname:"Sdao",affiliation:"int"};
var LL={id:4,name:"Lisa", surname:"Licitra",affiliation:"int"};
var LaLo={id:4,name:"Laura", surname:"Locati",affiliation:"int"};
var PaBo={id:4,name:"Paolo", surname:"Bossi",affiliation:"int"};



var SuMi={id:4,name:"Susanna", surname:"Migliori",affiliation:"poli"};
var ClCh={id:4,name:"Claudio", surname:"Chiastra",affiliation:"poli"};
var FM={id:4,name:"Francesco", surname:"Migliavacca",affiliation:"poli"};
var GaDu={id:4,name:"Gabriele", surname:"Dubini",affiliation:"poli"};
var LoGe={id:4,name:"Lorenzo", surname:"Genuardi",affiliation:"poli"};



var StBo={id:4,name:"Stefano", surname:"Bonacina",affiliation:"poli"};
var YlPr={id:4,name:"Ylenia", surname:"Privitera",affiliation:"poli"};
var SeMa={id:4,name:"Serena", surname:"Marsilio",affiliation:"poli"};
var FePa={id:4,name:"Federica", surname:"Passarelli",affiliation:"poli"};
var MaMas={id:4,name:"Marco", surname:"Masseroli",affiliation:"poli"};
var FrPi={id:4,name:"Francesco", surname:"Pinciroli",affiliation:"poli"};

var FaVe={id:4,name:"Fabio", surname:"Veronese",affiliation:"poli"};

var CrAu={id:4,name:"Cristina", surname:"Aurigemma",affiliation:_iCCU};
var FrBu={id:4,name:"Francesco", surname:"Burzotta",affiliation:_iCCU};
var DaSm={id:4,name:"David", surname:"Hildick-Smith",affiliation:"br"};
var JaCo={id:4,name:"James", surname:"Cockburn",affiliation:"br"};


var AnMe={id:4,name:"Antonella", surname:"Messina",affiliation:"int"};
var FrGr={id:4,name:"Francesca G.", surname:"Greco",affiliation:"int"};

var PaCa={id:4,name:"Paolo", surname:"Casali",affiliation:"int"}
var AlGr={id:4,name:"Alessandro", surname:"Gronchi",affiliation:"int"}
var AlMa={id:4,name:"Alessandro", surname:"Marchianò",affiliation:"int"}


var FrSp={id:4,name:"Francesco", surname:"Spina",affiliation:"int"}
var AlLa={id:4,name:"Alberto", surname:"Laffranchi",affiliation:"int"}
var GiTr={id:4,name:"Giovanna", surname:"Trecate",affiliation:"int"}
var ViMo={id:4,name:"Vittorio", surname:"Montefusco",affiliation:"int"}
var PaPa={id:4,name:"Paolo", surname:"Panizza",affiliation:"int"}
var LuMa={id:4,name:"Luigi", surname:"Mariani",affiliation:"int"}
var PaCo={id:4,name:"Paolo", surname:"Corradini",affiliation:"int"}


var ElCu={id:4,name:"Elena", surname:"Cutrì",affiliation:"poli"}
var GrSp={id:4,name:"Grazia", surname:"Spatafora",affiliation:"poli"}
var GaFr={id:4,name:"Gaia", surname:"Franzetti",affiliation:"int"}
var FeCr={id:4,name:"Federica", surname:"Crippa",affiliation:"int"}
var GiSp={id:4,name:"Giuseppe", surname:"Spadola",affiliation:"ieo"}
var AlTe={id:4,name:"Alessandro", surname:"Testori",affiliation:"ieo"}
var GiPe={id:4,name:"Giancarlo", surname:"Pennati",affiliation:"poli"}

var MaTa={id:4,name:"Maria Gabriella", surname:"Tana",affiliation:"poli"}
var SeCe={id:4,name:"Sergio", surname:"Cerutti",affiliation:"poli"}
var AnBi={id:4,name:"Anna Maria", surname:"Bianchi",affiliation:"poli"}






var _tmri="mri";
var _tct="ct";
var _toct="oct";
var _trdm="radiomic"
var _tismrm="ismrm";
var _tdwi="dwi";
var _tdti="dti";
var _tsimulation="simulation";
var _tcsd="csd";
var _tcad="cad";
var _tcardio="cardionvascularimaging";
var _tem="electromagnetic fields";
var _tir="Image Registration";
var _tis="Image Segmentation";
var _tped="Pediatric";
var _tbrain="Brain";
var _tneuro="Neuro";
var _toncology="oncology";
var _ttretresp="treatmentresponse";
var _thn="H&N";
var _tsnr="SNR";
var _tpmr="Pseudo Multiple REpliccas";
var _tsarcomas="Soft Tissues Sarcomas";
var _trecist="RECIST";
var _tfeatureselection="featuresselection";
var _tml="Machine Learning";
var _tcloud="cloud Computing";
var _twebapp="webgui";
var _tstaging ="staging";
var _tradiotherapy ="radiotherapy";

var IMG="http://biodimensional.com/RESOURCES/img/";
var DOC="http://biodimensional.com/RESOURCES/doc/";

export const PUBLICATIONS: Publication[] = [
    {
        id:-2,
        title :"Seeking a widely adoptable practical standard to estimate signal-to-noise ratio in magnetic resonance imaging for multiple-coil reconstructions",
        abstract:"Background: Signal-to-noise ratio (SNR) is used to evaluate the performance of magnetic resonance (MR) imaging systems Accurate and consistent estimations are needed to routinely use SNR to assess coils and image reconstruction techniques.Purpose: To identify a reliable and practical method for SNR estimation in multiple-coil reconstructions.Study Type: Technical evaluation and comparison.Subjects/Phantom: A uniform phantom and four healthy volunteers: 35, 38, 39 y/o males, 25 y/o female. Assessment: Reference-standard SNR was calculated from 100 multiple replicas. Six SNR methods were compared against it: difference image (DI), analytic array combination (AC), pseudo-multiple-replica (PMR), generalized pseudo-replica (GPR), smoothed image subtraction (SIS), and DI with temporal instability correction (TIC). The assessment was repeated for different multiple-coil reconstructions.Statistical Tests: SNR methods were evaluated in terms of relative deviation (RD) and normalized mutual information (NMI) with respect to the reference-standard, using a linear regression (0.05 significance level) to assess how different factors affect accuracy.Results: Average RD (phantom) for DI, AC, PMR, GPR, SIS, TIC was 7.9%, 6%, 6.7%, 10.1%, 40%, 14.6%, respectively. RD increased with acceleration. SNR maps with AC were the most similar to the reference-standard (NMI=0.358). Considering all brain ROIs, average RD for all SNR methods varied 96% among volunteers, but remained approximately 10% for AC, PMR and GPR, whereas it was more than 30% for DI, SIS, and TIC. RD was mainly affected by image reconstruction (beta=12) for AC and SNR entropy for SIS (beta=19).Data Conclusion: AC provided accurate and robust SNR estimation. PMR and GPR are more generally applicable than AC. DI and TIC should be used only at low acceleration factors, when an additional noise-only scan cannot be acquired. SIS is a single-acquisition alternative to DI for Generalized Autocalibrating Partial Parallel Acquisition (GRAPPA) reconstructions.",
        authors:[EM,RL],
        journal: "Journal of Magneti Resoncace Imaging JMRI",
        date:"2021",
        link:"" ,
        type:"article",
        tags:[_tmri,_twebapp,_tsimulation,_tsnr,_tismrm,_tcloud],
        image: IMG + "snr.png",
        download:undefined

      },{
        id:-1,
        title :"A web-accessible tool for rapid analytical simulations of MR coils via cloud computing",
        abstract:"DGF is a web-based application to simulate MR coils in the case of simple geometries that mimic actual anatomy. For example, spheres can model the head, whereas cylinders can model the torso, abdomen or extremities. Ultimate intrinsic performance limits can be calculated within the same framework and used as absolute references to evaluate coil designs. DGF relies on rapid analytical electrodynamic simulations based on dyadic Green’s functions, which are executed using Docker containers, either on local computers or via cloud computing. A web-GUI enables users to set up simulations and display results. DGF is part of the Cloud MR project.",
        authors:[EM,GC,RL],
        journal: "ISMRM 29th annual meeting and exhibition 15-20 May 2021",
        date:"2021",
        link:"https://ismrm-smrt21.us3.pathable.com/" ,
        type:"conference",
        tags:[_tmri,_tcloud,_tem,_tismrm],
        image: IMG + "dgf.png",
        download:undefined

      },
 { id:0,
  title :"Retrospective study of late radiation-induced damages after focal radiotherapy for childhood brain tumors",
  abstract:"Purpose: To study a robust and reproducible procedure to investigate a relation between focal brain radiotherapy (RT) low doses, neurocognitive impairment and late White Matter and Gray Matter alterations, as shown by Diffusion Tensor Imaging (DTI), in children. Methods and materials Forty-five patients (23 males and 22 females, median age at RT 6.2 years, median age at evaluations 11.1 years) who had received focal RT for brain tumors were recruited for DTI exams and neurocognitive tests. Patients’ brains were parceled in 116 regions of interest (ROIs) using an available segmented atlas. After the development of an ad hoc, home-made, multimodal and highly deformable registration framework, we collected mean RT doses and DTI metrics values for each ROI. The pattern of association between cognitive scores or domains and dose or DTI values was assessed in each ROI through both considering and excluding ROIs with mean doses higher than 75% of the prescription. Subsequently, a preliminary threshold value of dose discriminating patients with and without neurocognitive impairment was selected for the most relevant associations.Results: The workflow allowed us to identify 10 ROIs where RT dose and DTI metrics were significantly associated with cognitive tests results (p<0.05). In 5/10 ROIs, RT dose and cognitive tests were associated with p<0.01 and preliminary RT threshold dose values, implying a possible cognitive or neuropsychological damage, were calculated. The analysis of domains showed that the most involved one was the “school-related activities”. Conclusion: This analysis, despite being conducted on a retrospective cohort of children, shows that the identification of critical brain structures and respective radiation dose thresholds is achievable by combining, with appropriate methodological tools, the large amount of data arising from different sources. This supported the design of a prospective study to gain stronger evidence.",
  authors:[ClCa,SM,EM,MaO,EmPe,MaLe,BaDi,OmAl,DP,VBi,ElSc,MB,MaMa,GePo,LM,FA,PaVe,EmPi,LG],
  journal: "PLoS One",
  date:"2021",
  link:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0247748" ,
  type:"article",
  tags:[_trdm, _tneuro, _tbrain, _toncology, _tradiotherapy, _tped, _tmri],
  image:"https://journals.plos.org/plosone/article/figure/image?download&size=large&id=info:doi/10.1371/journal.pone.0247748.g001",
  download:"https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0247748&type=printable"

},{
    id:1,
    title :"CAMRIE – Cloud-Accessible MRI Emulator",
    abstract:"",
    authors:[EM,GC,CC,RL],
    journal: "ISMRM 28th annual meeting and exhibition 18-23 May 2020",
    date: "2020",
    link: "https://www.ismrm.org/20m/",
    type:"conference",
    tags:[_tmri,_tismrm, _tsimulation,_tem,_tcloud,_twebapp],
    image: IMG + "camrie.png",
    download:DOC + "camrie.pdf"
},
{
    id:2,
    title :"A multi-metric registration strategy for the alignment of longitudinal brain images in pediatric oncology",
    abstract:"Survival of pediatric patients with brain tumor has increased over the past 20 years, and increasing evidence of iatrogenic toxicities has been reported. In follow-ups, images are acquired at different time points where substantial changes of brain morphology occur, due to childhood physiological development and treatment effects. To address the image registration complexity, we propose two multi-metric approaches (Mplus, Mdot), combining mutual information (MI) and normalized gradient field filter (NGF). The registration performance of the proposed metrics was assessed on a simulated dataset (Brainweb) and compared with those obtained by MI and NGF separately, using mean magnitude and mean angular errors. The most promising metric (Mplus) was then selected and tested on a retrospective dataset comprising 45 pediatric patients who underwent focal radiotherapy for brain cancer. The quality of the realignment was scored by a radiation oncologist using a perceived misalignment metric (PM). All patients but one were assessed as PM ≤ 2 (good alignment), but the remaining one, severely affected by hydrocephalus and pneumocephalus at the first MRI acquisition, scored PM = 5 (unacceptable). These preliminary findings suggest that Mplus might improve the registration accuracy in complex applications such as pediatric oncology, when data are acquired throughout the years of follow-up, and is worth investigating.",
    authors:[EM,AB,MB,SM,ClCa,EmPe,BaDi,MaMa,MaO,GePo,FA,DP,EmPi,LG,PC,LM],
    journal: "Medical & Biological Engineering & Computing",
    date: "2020",
    link: "https://link.springer.com/article/10.1007/s11517-019-02109-4",
    type:"article",
    tags:[ _tmri, _tir, _tis, _tneuro, _tped, _toncology, _tbrain, _tdwi, _tdti,_tradiotherapy],
    image:IMG + "montin2020.png",
//    DOI:10.1007/s11517-019-02109-4
    download:DOC + "montin2020.pdf"
},
{
    id:3,
    title :"Relevance of apparent diffusion coefficient features for a radiomics-based prediction of response to induction chemotherapy in sinonasal cancer",
    abstract:"In this paper, several radiomics-based predictive models of response to induction chemotherapy (IC) in sinonasal cancers (SNCs) are built and tested. Models were built as a combination of radiomic features extracted from three types of MRI images: T1-weighted images, T2-weighted images and apparent diffusion coefficient (ADC) maps. Fifty patients (aged 54 ± 12 years, 41 men) were included in this study. Patients were classified according to their response to IC (25 responders and 25 nonresponders). Not all types of images were acquired for all of the patients: 49 had T1-weighted images, 50 had T2-weighted images and 34 had ADC maps. Only in a subset of 33 patients were all three types of image acquired. Eighty-nine radiomic features were extracted from the MRI images. Dimensionality reduction was performed by using principal component analysis (PCA) and by selecting only the three main components. Different algorithms (trees ensemble, K-nearest neighbors, support vector machine, naïve Bayes) were used to classify the patients as either responders or nonresponders. Several radiomic models (either monomodality or multimodality obtained by a combination of T1-weighted, T2-weighted and ADC images) were developed and the performance was assessed through 100 iterations of train and test split. The area under the curve (AUC) of the models ranged from 0.56 to 0.78. Trees ensemble, support vector machine and naïve Bayes performed similarly, but in all cases ADC-based models performed better. Trees ensemble gave the highest AUC (0.78 for the T1-weighted+T2-weighted+ADC model) and was used for further analyses. For trees ensemble, the models based on ADC features performed better than those models that did not use those features (P < 0.02 for one-tail Hanley test, AUC range 0.68–0.78 vs 0.56–0.69) except the T1-weighted+ADC model (AUC 0.71 vs 0.69, nonsignificant differences). The results suggest the relevance of ADC-based radiomics for prediction of response to IC in SNCs.",
    authors:[MB,GiCa,CaRe,SiSd,EM,VaCo,LM,LL,PaBo],
    journal: "NMR in Biomedicine",
    date: "2020",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/32009265",
    type:"article",
    tags:[ _tmri, _tdwi, _thn, _ttretresp, _toncology,_trdm],
    image:"https://onlinelibrary.wiley.com/cms/asset/7f7ed245-0082-4108-8043-d631bf3affc1/nbm4265-fig-0001-m.jpg",
//    DOI:10.1007/s11517-019-02109-4
 download:"https://onlinelibrary.wiley.com/doi/epdf/10.1002/nbm.4265"
 },

 {
    id:4,
    title :"Application of an OCT-based 3D reconstruction framework to the hemodynamic assessment of an ulcerated coronary artery plaque",
    abstract:"The rupture of a vulnerable plaque, known as ulceration, is the most common cause of myocardial infarction. It can be recognized by angiographic features, such as prolonged intraluminal filling and delayed clearance of the contrast liquid. The diagnosis of such an event is an open challenge due to the limited angiographic resolution and acquisition frequency. The treatment of ulcerated plaques is an open discussion, due to the high heterogeneity and the lack of evidences that support particular strategies. Therefore, the therapeutic decision should follow a detailed investigation with angiography and intravascular imaging, such as optical coherence tomography (OCT), to locate the lesion, besides its geometric features and the lumen occlusion severity. The aim of this study is the application of a framework for the in-silico analysis of the disrupted hemodynamics due to an ulcerated lesion. The study employed a validated OCT-based reconstruction methodology and computational fluid dynamics (CFD) simulations for the computation of local hemodynamic quantities, such as wall shear stress. The reported findings, such as disrupted pre-operative flow conditions, proved the applicability of the developed framework for CFD analyses on complicated patient-specific anatomies that feature ulcerated plaques. The prediction of lesion expansion and the clinical decision making can benefit from a reliable computation of wall shear stress distributions that result from the peculiar anatomy of the lesion. The application of intravascular OCT imaging, high fidelity 3D reconstructions and CFD simulations might guide the treatment of such pathology.",
    authors:[SuMi,ClCh,MB,EM,GaDu,LoGe,CrAu,LM,FrBu,FM],
    journal: "Medical Engineering and Physics",
    date: "2020",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1350453320300072",
    type:"article",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:IMG+"sumi2020.png",
    download:DOC + "sumi2020.pdf"

//    DOI:10.1007/s11517-019-02109-4
},
{
    id:5,
    title :"Automatic segmentation of optical coherence tomography pullbacks of coronary arteries treated with bioresorbable vascular scaffolds: Application to hemodynamics modeling",
    abstract:"Automatic algorithms for stent struts segmentation in optical coherence tomography (OCT) images of coronary arteries have been developed over the years, particularly with application on metallic stents. The aim of this study is three-fold: (1) to develop and to validate a segmentation algorithm for the detection of both lumen contours and polymeric bioresorbable scaffold struts from 8-bit OCT images, (2) to develop a method for automatic OCT pullback quality assessment, and (3) to demonstrate the applicability of the segmentation algorithm for the creation of patient-specific stented coronary artery for local hemodynamics analysis. Methods The proposed OCT segmentation algorithm comprises four steps: (1) image pre-processing, (2) lumen segmentation, (3) stent struts segmentation, (4) strut-based lumen correction. This segmentation process is then followed by an automatic OCT pullback image quality assessment. This method classifies the OCT pullback image quality as ‘good’ or ‘poor’ based on the number of regions detected by the stent segmentation. The segmentation algorithm was validated against manual segmentation of 1150 images obtained from 23 in vivo OCT pullbacks. Results When considering the entire set of OCT pullbacks, lumen segmentation showed results comparable with manual segmentation and with previous studies (sensitivity ~97%, specificity ~99%), while stent segmentation showed poorer results compared to manual segmentation (sensitivity ~63%, precision ~83%). The OCT pullback quality assessment algorithm classified 7 pullbacks as ‘poor’ quality cases. When considering only the ‘good’ classified cases, the performance indexes of the scaffold segmentation were higher (sensitivity >76%, precision >86%). Conclusions This study proposes a segmentation algorithm for the detection of lumen contours and stent struts in low quality OCT images of patients treated with polymeric bioresorbable scaffolds. The segmentation results were successfully used for the reconstruction of one coronary artery model that included a bioresorbable scaffold geometry for computational fluid dynamics analysis.The proposed OCT segmentation algorithm comprises four steps: (1) image pre-process- ing, (2) lumen segmentation, (3) stent struts segmentation, (4) strut-based lumen correction. This segmentation process is then followed by an automatic OCT pullback image quality assessment. This method classifies the OCT pullback image quality as ‘good’ or ‘poor’ based on the number of regions detected by the stent segmentation. The segmentation algorithm was validated against manual segmentation of 1150 images obtained from 23 in vivoOCT pullbacks.When considering the entire set of OCT pullbacks, lumen segmentation showed results comparable with manual segmentation and with previous studies (sensitivity ~97%, specificity ~99%), while stent segmentation showed poorer results compared to manual segmentation (sensitivity ~63%, precision ~83%). The OCT pullback quality assessment algorithm classified 7 pullbacks as ‘poor’ quality cases. When considering only the ‘good’ classified cases, the performance indexes of the scaffold segmentation were higher (sensi- tivity >76%, precision >86%).This study proposes a segmentation algorithm for the detection of lumen contours and stent struts in low quality OCT images of patients treated with polymeric bioresorbable scaffolds. The segmentation results were successfully used for the reconstruction of one coronary artery model that included a bioresorbable scaffold geometry for computational fluid dynam- ics analysis.",
    authors:[MB,SuMi,EM,RaRa,GaDu,FM,LM,ClCh],
    journal: "PLoS ONE",
    date: "2019",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/30870477",
    type:"article",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:"https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0213603.g004&type=large",
    download:"https://www.researchgate.net/publication/331759079_Automatic_segmentation_of_optical_coherence_tomography_pullbacks_of_coronary_arteries_treated_with_bioresorbable_vascular_scaffolds_Application_to_hemodynamics_modeling/fulltext/5c8affbea6fdcc3817541e30/Automatic-segmentation-of-optical-coherence-tomography-pullbacks-of-coronary-arteries-treated-with-bioresorbable-vascular-scaffolds-Application-to-hemodynamics-modeling.pdf",
//    DOI:10.1007/s11517-019-02109-4
},
{
    id:6,
    title :"Radiomics-based prediction of response to induction chemotherapy in sinonasal cancer",
    abstract:"Forty-two patients with sinonasal cancer (53 ± 12 years, 34 men) were considered in this study. Different types of MRIs were acquired at baseline: T1-weighted images (T1WI), T2-weighted (T2WI) images and diffusion weighted images (DWI). In particular, 41 patients had T1WI, 42 patients had T2WI and 28 patients had DWI. MRI scanners with 1.5T were used. The T1WI and T2WI were acquired using spin-echo sequences, while echo-planar imaging was used for the acquisition of the DWI.Clinical data were also acquired for each patient. In particular, the response to IC was evaluated using the Response and Evaluation Criteria in Solid Tumors (RECIST). Using the RECIST score, patients were divided in responders (partial or complete responders) and non-responders (stable or progressive disease). The distribution of the two classes was even (21 responders and 21 non-responders). The tumor region was manually segmented by an expert radiologist. Intensity standardization was applied to T1WI and T2WI to normalize the range of intensities of the different images. In particular, quantile 0 to 0.98 of the intensities of the images were linearly mapped to the range 0-5000. DWI were used to compute the Apparent Diffusion Coefficient (ADC), which is a quantitative    measure and therefore does not need normalization. For each image type (T1WI, T2WI and ADC) a separate radiomic analysis was performed. In particular, 89 radiomic     features divided in 3 categories (first-order statistics, textural and geometrical features) were  extracted.   Z-score normalization was performed to     normalize the ranges of variability of the features. Several predictive models were tested, differing for type of image analyzed (T1WI, T2WI or ADC), and number of features (added to the model according to a rank based on statistical significance). Logistic regression was used as classification algorithm. Leave-one-out cross-validation was performed to evaluate each model. The metrics of evaluation were classification accuracy and area under the curve (AUC). Results The best performance was obtained from ADC-based models (85.7% using 55 features, AUC 0.85). T1WI and T2WI gave worse results (peak accuracy around 60%, AUC around 0.6). Conclusion Radiomic analysis of pre-treatment imaging provides a potential, non-invasive, way to predict response to IC. Radiomics based on T1WI and T2WI was not useful in predicting response to IC, while predictive models based on ADC features reached up to 85% accuracy and AUC of 0.85.",
    authors:[MB,GiCa,CaRe,SiSd,EM,VaCo,LM,LL,PaBo],
    journal: "7TH ICHNO: INTERNATIONAL CONFERENCE ON INNOVATIVE APPROACHES IN HEAD & NECK ONCOLOGY",
    date: "2019",
    link: "https://www.thegreenjournal.com/article/S0167-8140(19)30281-6/abstract",
    type:"conference",
    tags:[_tmri,_trdm,_tdwi,_ttretresp,_thn,_toncology,_trecist,_tfeatureselection,_tml],
    image:"https://www.esmo.org/var/esmo/storage/images/media/esmo/meetings/2019/ichno-2019/ichno-2019-head-and-neck-oncology-1000x250/2489049-5-eng-GB/ichno-2019-head-and-neck-oncology-1000x250.jpg",
    download:DOC + "bolo2019.pdf"
//    DOI:10.1007/s11517-019-02109-4
},
{
    id:7,
    title :"Assessment of Stability and Discrimination Capacity of Radiomic Features on Apparent Diffusion Coefficient Images",
    abstract:"The objectives of the study are to develop a new way to assess stability and discrimination capacity of radiomic features without the need of test-retest or multiple delineations and to use information obtained to perform a preliminary feature selection. Apparent diffusion coefficient (ADC) maps were computed from diffusion-weighted magnetic resonance images (DW-MRI) of two groups of patients: 18 with soft tissue sarcomas (STS) and 18 with oropharyngeal cancers (OPC). Sixty-nine radiomic features were computed, using three different histogram discretizations (16, 32, and 64 bins). Geometrical transformations (translations) of increasing entity were applied to the regions of interest (ROIs), and the intra-class correlation coefficient (ICC) was used to compare the features computed on the original and modified ROIs. The distribution of ICC values for minimal and maximal entity translations (ICC 10 and ICC 100 , respectively) was used to adjust thresholds of ICC (ICC min and ICC max ) used to discriminate between good, unstable (ICC 10 < ICC min ), and non-discriminative features (ICC 100 > ICC max ). Fifty-four and 59 radiomic features passed the stability-based selection for all the three histogram discretizations for the OPC and STS datasets, respectively. The excluded features were similar across the different histogram discretizations (Jaccard’s index 0.77 ± 0.13 and 0.9 ± 0.1 for OPC and STS, respectively) but different between datasets (Jaccard’s index 0.19 ± 0.02). The results suggest that the observed radiomic features are mainly stable and discriminative, but the stability depends on the region of the body under observation. The method provides a way to assess stability without the need of test-retest or multiple delineations.",
    authors:[MB,VaCo,EM,AnMe,GiCa,FrGr,SiSd,LM],
    journal: "Journal of Digital Imaging",
    date: "2018",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/29725965",
    type:"article",
    tags:[_tmri,_trdm,_tdwi,_thn,_toncology,_trecist,_tfeatureselection,_tml],
    image:"https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/cb9d7decbda81c22d63c34070b4ef2e8c4d9b181/5-Figure1-1.png",
    download:"https://link.springer.com/content/pdf/10.1007/s10278-018-0092-9.pdf"
//    DOI:10.1007/s11517-019-02109-4
},

{
    id:8,
    title :"MR optimum – A web-based application for signal-to-noise ratio evaluation",
    abstract:"",
    authors:[EM,RoWi,ToBl,RL],
    journal: "ISMRM 27th annual meeting and exhibition",
    date: "2019",
    link: "http://www.cloudmrhub.com",
    type:"conference",
    tags:[_tmri,_tismrm, _tsimulation,_tem,_tcloud,_twebapp],
    image: IMG + "mroptimum.png",
    download:DOC + "mroptimum.pdf"
},


{
    id:9,
    title :"A patient-specific study investigating the relation between coronary hemodynamics and neo-intimal thickening after bifurcation stenting with a polymeric bioresorbable scaffold",
    abstract:"We present an application of a validated reconstruction methodology for the comparison between patient-specific hemodynamics and neo-intimal thickening at nine months from the intervention. (1) Background: Coronary bifurcation stenting alters the vessel geometry, influencing the local hemodynamics. The evaluation of wall shear stress (WSS) relies on the application of computational fluid dynamics to model its distribution along the coronary tree. The endothelium actively responds to WSS, which triggers eventual cell proliferation to cover the stent struts. (2) Methods: Baseline optical coherence tomography and angiographic data were combined to reconstruct a patient-specific coronary bifurcation with an implanted bioresorbable scaffold and to simulate the hemodynamics. Results were linked with the neo-intimal thickening after nine months from the intervention. (3) Results: Blood velocity patterns were disrupted at the bifurcation due to the presence of the stent. It was observed that 55.6% of the scaffolded lumen surface was exposed to values of time-averaged WSS lower than 0.4 Pa. Follow-up images showed a luminal narrowing of 19% in the main branch. There was also a complete coverage in 99% of struts. (4) Conclusions: This approach provided valuable complementary information that might improve the clinical outcomes in this subset of coronary diseases.",
    authors:[SuMi,RaRa,MB,EM,FrBu,DaSm,GaDu,LM,FM,JaCo,ClCh],
    journal: "Applied Science",
    date: "2018",
    link: "https://www.mdpi.com/2076-3417/8/9/1510",
    type:"article",
    tags:[_tmri],
    image:"https://www.mdpi.com/applsci/applsci-08-01510/article_deploy/html/images/applsci-08-01510-g004-550.jpg",
    download:"https://www.mdpi.com/2076-3417/8/9/1510/pdf"

}
,
{
    id:10,
    title :"Retrospective study of late radiation damages after focal radiotherapy for childhood brain tumors",
    abstract:"Purpose: Investigate late radiation damages after focal radiotherapy (RT) for childhood brain cancer in terms of neurocognitive outcome. Methods 45 retrospective children (age at RT:median = 6.2 years, range 1.1–22.5, age at valuations:median = 11.1 years, range 4.4–25.9) who received focal RT at our Institution with at least 3-years follow-up without relapse, were recruited to undergo cognitive, neuropsychological and psychological testing. Planning CT images were retrieved and patients’ brains were parceled in 116 regions of interest (ROIs) using the Tzourio-Mazoyer atlas [1] and a dedicated home-made, multimodal, highly deformable registration framework specifically developed for the study. Mean RT dose value was collected for each ROI. The pattern of association between the categorized cognitive tests scores and RT dose was assessed in each ROI through the Kruskal Wallis test. Subsequently, the preliminary threshold of RT dose (optimal cut-off value) discriminating patients with and without neurocognitive changes (impaired/non-impaired patients), was selected by using a Receiver Operating Characteristic curve (ROC). Results The statistical analysis allowed us to identify the ROIs where mean dose values and cognitive tests results were significantly related. For the 29 ROIs showing the most significant associations, preliminary threshold dose values related to a specific cognitive or neuropsychological damage were obtained, ranging from 3.5 to 29.8 Gy. As an example, Figure1 shows the distributions of dose values in the ROI “Frontal_ Sup_Orb_ R” for patients with impaired/non-impaired performances in a specific cognitive test (Processing Speed Index, WISC III). Conclusions The preliminary analysis of the retrospective children suggested that the main aim (identify brain structures highly susceptible to radiation damages and the respective radiation dose thresholds) is achievable, justifying a prospective study currently open to children enrollment. Partially funded by AIRC.",
    authors:[SM,ClCa,MLe,EM,MaO,EmPe,FrSp,BaDi,VBi,ElSc,FA,MaMa,LM,PaVe,EmPi,LG],
    journal: "Physica Medica",
    date: "2018",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1120179718301194",
    type:"article",
    tags:[_tmri,_toncology,_tped,_tbrain,_tdwi,_tct,_tir,_tradiotherapy],
    image:"https://pbs.twimg.com/media/B2UMHRSIgAASkKV.png",
    download:DOC + "meroni.pdf"
//    DOI:10.1007/s11517-019-02109-4
},
{
    id:11,
    title :"Use of apparent diffusion coefficient images to predict response to induction chemotherapy in sinonasal cancer.",
    abstract:"The purpose of this study is to identify a set of radiomic features extracted from apparent diffusion coefficient (ADC) maps, obtained using baseline diffusion weighted magnetic resonance imaging (DW-MRI), which are able to predict the outcome of induction chemotherapy (IC) in sinonasal cancers. Such prediction could help the clinician defining the better treatment for a particular patient. Eighty-eight radiomic features were extracted from the ADC maps of 15 patients that underwent IC. A preliminary filtering of the features was made by assessing their stability to geometrical transformations of the region of interest (ROI). Mann-Whitney tests corrected for control of false discoveries were performed to identify the features that could discriminate between responsive and nonresponsive patients (4 and 11 respectively). Twenty features were found to be able to discriminate the two groups and they can potentially be used for prediction of response to treatment.",
    authors:[MB,EM,VaCo,PaBo,GiCa,LM],
    journal: "Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
    date: "2018",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/30440511",
    type:"conference",
    tags:[_tmri,_toncology,_tped,_tbrain,_tdwi,_trdm,_tml,_tfeatureselection],
    image:"http://biodimensional.com/RESOURCES/img/MB.png",
    download:DOC + "boloEMBS.pdf"
//    DOI:10.1007/s11517-019-02109-4
},
  {
    id:12,
    title :"Radiomic analysis of soft tissues sarcomas can distinguish intermediate from high-grade lesions",
    abstract:"Purpose: To assess the feasibility of grading soft tissue sarcomas (STSs) using MRI features (radiomics). Materials and Methods: MRI (echo planar SE, 1.5T) from 19 patients with STSs and a known histological grading, were retrospectively analyzed. The apparent diffusion coefficient (ADC) maps, obtained by diffusion-weighted imaging acquisitions, were analyzed through 65 radiomic features, intensity-based (first order statistics, FOS) and texture (gray level co-occurrence matrix, GLCM; and gray level run length matrix, GLRLM) features. Feature selection (sequential forward floating search) and classification (k-nearest neighbor classifier) were performed to distinguish intermediate- from high-grade STSs. Classification was performed using the three different sub-groups of features separately as well as all the features together. The entire dataset was divided in three subsets: the training, validation and test set, containing, respectively, 60, 30, and 10% of the data. Results: Intermediate-grade lesions had a higher and less disperse ADC values compared with high-grade ones: most of FOS related to intensity are higher for the intermediate-grade STSs, while FOS related to signal variability were higher in the high grade (e.g., the feature variance is 2.6*10 5 ± 0.9*10 5 versus 3.3*10 5 ± 1.6*10 5 , P = 0.3). The GLCM features related to entropy and dissimilarity were higher in the high-grade. When performing classification, the best accuracy is obtained with a maximum of three features for each subgroup, FOS features being those leading to the best classification (validation set: FOS accuracy 0.90 ± 0.11, area under the curve [AUC] 0.85 ± 0.16; test set: FOS accuracy 0.88 ± 0.25, AUC 0.87 ± 0.34). Conclusion: Good accuracy and AUC could be obtained using only few Radiomic features, belonging to the FOS class.",
    authors:[VaCo,EM, AnMe, PaCa, AlGr,AlMa,LM],
    journal: "Journal of Magneti Resoncace Imaging JMRI",
    date: "2018",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28653477",
    type:"article",
    tags:[_tmri,_trdm,_tstaging,_toncology,_tml,_tfeatureselection,_tsarcomas],
    image:"http://biodimensional.com/RESOURCES/img/VaCoEM.png",
    download:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456060/pdf/pone.0177495.pdf"
},
  {
    id:13,
    title :"A framework for computational fluid dynamic analyses of patient-specific stented coronary arteries from optical coherence tomography images",
    abstract:"The clinical challenge of percutaneous coronary interventions (PCI) is highly dependent on the recognition of the coronary anatomy of each individual. The classic imaging modality used for PCI is angiography, but advanced imaging techniques that are routinely performed during PCI, like optical coherence tomography (OCT), may provide detailed knowledge of the pre-intervention vessel anatomy as well as the post-procedural assessment of the specific stent-to-vessel interactions. Computational fluid dynamics (CFD) is an emerging investigational tool in the setting of optimization of PCI results. In this study, an OCT-based reconstruction method was developed for the execution of CFD simulations of patient-specific coronary artery models which include the actual geometry of the implanted stent. The method was applied to a rigid phantom resembling a stented segment of the left anterior descending coronary artery. The segmentation algorithm was validated against manual segmentation. A strong correlation was found between automatic and manual segmentation of lumen in terms of area values. Similarity indices resulted >96% for the lumen segmentation and >77% for the stent strut segmentation. The 3D reconstruction achieved for the stented phantom was also assessed with the geometry provided by X-ray computed micro tomography scan, used as ground truth, and showed the incidence of distortion from catheter-based imaging techniques. The 3D reconstruction was successfully used to perform CFD analyses, demonstrating a great potential for patient-specific investigations. In conclusion, OCT may represent a reliable source for patient-specific CFD analyses which may be optimized using dedicated automatic segmentation algorithms.",
    authors:[SuMi,ClCh, MB, EM, GaDu,CrAu,RoFe,FrBu,LM],
    journal: "Medical Engineering and Physics",
    date: "2017",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28711588",
    type:"article",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:IMG+ "sumi2017.png",
    download:DOC + "sumi2017.pdf"
},
  {
    id:14,
    title :"Reconstruction of stented coronary arteries from optical coherence tomography images: Feasibility, validation, and repeatability of a segmentation method",
    abstract:"Optical coherence tomography (OCT) is an established catheter-based imaging modality for the assessment of coronary artery disease and the guidance of stent placement during percutaneous coronary intervention. Manual analysis of large OCT datasets for vessel contours or stent struts detection is time-consuming and unsuitable for real-time applications. In this study, a fully automatic method was developed for detection of both vessel contours and stent struts. The method was applied to in vitro OCT scans of eight stented silicone bifurcation phantoms for validation purposes. The proposed algorithm comprised four main steps, namely pre-processing, lumen border detection, stent strut detection, and three-dimensional point cloud creation. The algorithm was validated against manual segmentation performed by two independent image readers. Linear regression showed good agreement between automatic and manual segmentations in terms of lumen area (r>0.99). No statistically significant differences in the number of detected struts were found between the segmentations. Mean values of similarity indexes were >95% and >85% for the lumen and stent detection, respectively. Stent point clouds of two selected cases, obtained after OCT image processing, were compared to the centerline points of the corresponding stent reconstructions from micro computed tomography, used as ground-truth. Quantitative comparison between the corresponding stent points resulted in median values of ∼150 μm and ∼40 μm for the total and radial distances of both cases, respectively. The repeatability of the detection method was investigated by calculating the lumen volume and the mean number of detected struts per frame for seven repeated OCT scans of one selected case. Results showed low deviation of values from the median for both analyzed quantities. In conclusion, this study presents a robust automatic method for detection of lumen contours and stent struts from OCT as supported by focused validation against both manual segmentation and micro computed tomography and by good repeatability.",
    authors:[ClCh, EM,MB,SuMi,CrAu,FrBu,SiCe,GaDu,FM,LM],
    journal: "PLoS ONE",
    date: "2017",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28574987",
    type:"article",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:IMG+ "chiastra2017.png",
    // download:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5456060/pdf/pone.0177495.pdf"
    download:"https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0177495&type=printable"
},
  {
    id:15,
    title :"Reconstruction of stented coronary arteries for CFD analyses : from in vitro to patient-specific models",
    abstract:"Optical coherence tomography (OCT) is an established catheter-based imaging modality for the assessment of coronary artery disease and the guidance of stent placement during percutaneous coronary intervention. Manual analysis of large OCT datasets for vessel contours or stent struts detection is time-consuming and unsuitable for real-time applications. In this study, a fully automatic method was developed for detection of both vessel contours and stent struts. The method was applied to in vitro OCT scans of eight stented silicone bifurcation phantoms for validation purposes. The proposed algorithm comprised four main steps, namely pre-processing, lumen border detection, stent strut detection, and three-dimensional point cloud creation. The algorithm was validated against manual segmentation performed by two independent image readers. Linear regression showed good agreement between automatic and manual segmentations in terms of lumen area (r>0.99). No statistically significant differences in the number of detected struts were found between the segmentations. Mean values of similarity indexes were >95% and >85% for the lumen and stent detection, respectively. Stent point clouds of two selected cases, obtained after OCT image processing, were compared to the centerline points of the corresponding stent reconstructions from micro computed tomography, used as ground-truth. Quantitative comparison between the corresponding stent points resulted in median values of ∼150 μm and ∼40 μm for the total and radial distances of both cases, respectively. The repeatability of the detection method was investigated by calculating the lumen volume and the mean number of detected struts per frame for seven repeated OCT scans of one selected case. Results showed low deviation of values from the median for both analyzed quantities. In conclusion, this study presents a robust automatic method for detection of lumen contours and stent struts from OCT as supported by focused validation against both manual segmentation and micro computed tomography and by good repeatability.",
    authors:[SuMi,MB,EM,GaDu,CrAu,FrBu,LM,FM,ClCh],
    journal: "Proceedings VII Meeting Italian Chapter of the European Society of Biomechanics (ESB-ITA 2017)",
    date: "2017",
    link: "https://www.semanticscholar.org/paper/Reconstruction-of-stented-coronary-arteries-for-CFD-Migliori-Bologna/d034dfd1769efae5deec18524c5842ddd55944c2",
    type:"conference",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:"https://d3i71xaburhd42.cloudfront.net/d034dfd1769efae5deec18524c5842ddd55944c2/1-Figure1-1.png",
    download:DOC + "chiastra2017.pdf"

},
  {
    id:16,
    title :"A method for coronary bifurcation centerline reconstruction from angiographic images based on focalization optimization",
    abstract:'A method for the reconstruction of a vessel centerline from angiographic images is outlined in this work. A typical coronary artery segment with bifurcations was emulated with a 3D printed static phantom and several angiograms were acquired at various angular positions on the C-Arm. The effectiveness of the reconstruction turned out to be largely influenced by the intrinsic parameters of the angiographic system, particularly the homogeneous coordinates system scaling factor λ. Therefore, recourse was made to a heuristic optimization method to estimate the optimal value of λ for each view. We measured the reliability of the reconstruction method by varying the fitness function of the optimization step and measuring the distances of 8 test points in comparison to the corresponding points identified in the μCT centerline. Preliminary results showed that, with an adequate number of views, the adoption of the optimal fitness function allowed the median distance error to be decreased below the acceptance threshold of 10%. As expected, the reliability of the method is improved by increasing the number of processed views.',
    authors:[EM,SuMi,ClCh,CCr,RoFe,CrAu,Mle,FrBu,FM,LM],
    journal:"Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS" ,
    date: "2016",
    link: "https://ieeexplore.ieee.org/document/7591644",
    type:"conference",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:IMG+"montin2016.png",
    download:DOC + "montin2016.pdf"


},
  {
    id:17,
    title :"Nasopharyngeal carcinoma lymph nodes evaluation during therapy through diffusionweighted magnetic resonance images",
    abstract:"In order to assess the evolution of lesions during therapy, radiologists have to integrate information arising from different imaging techniques (e.g. morphological and functional) and time points (e.g. pre and post treatment). The purpose of this study was to quantitatively evaluate the treatment effect of chemotherapy on nasopharyngeal pathological carcinoma (NPC) using a semi-automatic framework integrating these data. The model concerns three main phases: 1) coregistration of volumes arising from the same time point on a common 3D uniform mesh; 2) pathological lymph nodes (PLN) identification in pre and post treatment volumes (PRE, POST); 3) tissues evaluation through apparent diffusion coefficient (ADC). The output of this procedure was compared to a hand made definition, performed on 12 patients longitudinally scanned. Each patient had a strong reduction of the NPC volume as reported by both qualitative and quantitative evaluations (Wilcoxon rank sum test P=0.885), the average volume decrease computed by the radiologist and by the semi-automatic segmentation procedure were: −79.21%±21.49% and −78.26%± 21.23% and the mean magnitude difference among them was 2.60% ± 2.02%. Although therapy induces morphological and functional changes on NPC lesions, this framework demonstrates a high sensibility and specificity.",
    authors:[EM,DzSe,PP,LM],
    journal: "6th European Conference of the International Federation for Medical and Biological Engineering",
    date:"2015" ,
    link:"https://link.springer.com/chapter/10.1007/978-3-319-11128-5_53" ,
    type:"conference",
    tags:[_tmri,_tstaging,_toncology,_tml,_tfeatureselection,_thn],
    image:IMG+"montin2015.png",
    download:"https://www.researchgate.net/profile/Eros_Montin/publication/282373770_Nasopharyngeal_Carcinoma_Lymph_Nodes_Evaluation_during_Therapy_through_Diffusion_Weighted_Magnetic_Resonance_Images/links/566e9adb08aea0892c529df7/Nasopharyngeal-Carcinoma-Lymph-Nodes-Evaluation-during-Therapy-through-Diffusion-Weighted-Magnetic-Resonance-Images.pdf",


},
  {
    id:18,
    title :"Biomechanical evaluation of skin and melanocytic naevi",
    abstract:"Pigmented skin lesions can be either benign(melanocytic naevus) or malignant (melanoma). Malignantmelanoma is a highly aggressive tumor causing more than 75%of skin cancer deaths. Early diagnosis of melanoma significantlyreduces the associated mortality. Unfortunately, currentmethodologies mainly based on imaging techniques are notalways effective and a definite diagnosis requires excision biopsy.A biomechanical analysis could help the early diagnosis ofmelanoma as differences in the mechanical properties of the skinfamilies of cells have been reported, (melanocytes stiffer thankeratinocytes). As number and aggregation of melanocytesincrease from melanocytic naevus to melanoma, the evaluation ofthe stiffness of the skin layers could help in discriminating benignand malignant lesions. In this study, depth-dependent (i.e. acrossthe skin layers) displacements (consequent to a superficialmechanical stimulus) beneath melanocytic naevi andsurrounding skin are investigated to assess possible differences inmaterial properties. To this end, a methodology involving anexperimental campaign and image registration strategy wasdeveloped and applied to six healthy cases. A statisticallysignificant difference in the slope of the depth-dependentdisplacement was observed, indicating higher stiffness formelanocytic naevi. These novel findings suggest the potentialityof a biomechanical characterization of the pigmented skin lesions",
    authors:[ElCu,GaFr,FeCr,EM,GiSp,AlTe,LM,GiPe],
    journal: "CAE fostering a synergistic environment in engineering simulaiton!",
    date:"2015" ,
    link:"http://meeting2016.enginsoft.it/poster/PosterAward2016_nominated%2046.pdf" ,
    type:"conference",
    tags:[],
    image:IMG+"cutriposter.png",
    download:DOC + "cutri2015.pdf"


},
  {
    id:19,
    title :"Image registration framework to investigate children neurocognitive outcome after focal brain irradiation",
    abstract:"Purpose/Objective: To evaluate the reliability of a framework for correlation of dose distribution (DD) and Magnetic Resonance (MRI) information related to long term neurocognitive outcome in pediatric patients (pts) focally irradiated for primitive malignant brain tumors. Image registration during oncological therapy is a difficult task, which becomes even harder when there is a large gap between acquisition times of successive scans. Materials and Methods: The main challenges of the workflow were the fusion of CT on a morphological MRI acquired at the time of the treatment (MR0) and the fusion of MR0 with the revaluation morphological MRI (MR1) and functional diffusion tensor imaging (DTI) acquired 3 to 10 years after RT. As a pilot study CT and DD were collected for 18 pediatric pts who completed RT at least 3 years before revaluation. CT and DD were registered to MR0, following a multi step process made of rigid registrations. The registered images were further matched with MR1 through a global (affine) and a local (free form deformation based on b-spline) deformation using mutual information as similarity metric. A similar approach was used for the functional registration. The alignment was scored by a neuroradiologist, a radiotherapist and a medical physicist by drawing contours of regions of interest (ROI) on the source images. The ROIs were deformed using the deformation field estimated by the registration procedure and superimposed to their target images, thus making the evaluation possible. By applying this framework it was possible to map the DD and the DTI maps on a common space defined by the MR1 for the subsequent statistical evaluation. A brain atlas was registered on MR1 by rigid and non rigid registrations in order to label white matter regions of interest. Correlation of white matter regions, DD and DTI maps was then achievable. Neurocognitive tests were made to evaluate cognitive and psychological features and executive functions of the pts. Statistical analysis is being performed. Results: For the CT-MR0 registration the average score obtained was 2.27 (being 0 the score assigned to the perfect alignment and 5 to the worst one. 3 was considered sufficient), while the MR0-MR1 fusion obtained 1.47; and DTIMR1 fusion 1.1. Concerning the statistical analysis, preliminary results indicate a correlation between dose values and fractional anisotropy values obtained from DTI maps for the frontal superior lobe left and right, the right anterior cingulum and right putamen. Conclusions: Our multi step registration process was able to account for different positions of the patient during the radiological studies and even for patient growth. The low score obtained for CT-MR0 registration was mainly due to the poor quality of older CT images. This image registration study represents the backbone of a larger clinical study that will also include prospective pts to correlate DD to functional neurocognitive damages. Partially founded by Associazione Italiana per la Ricerca sul Cancro (AIRC).",
    authors:[SM,EM,FA,ClCa,GePo,MaO,EmPe,EmPi,ElSc,BaDi,MaMa,LG],
    journal: "Radiotherapy and Oncology",
    date:"2015" ,
    link:"https://www.thegreenjournal.com/article/S0167-8140(15)41523-3/fulltext" ,
    type:"conference",
    tags:[_tmri,_tct,_tir,_tped,_tbrain,_toncology,_tradiotherapy,_ttretresp,_tneuro],
    image:IMG + "sm2015.png",
    download:undefined


},
  {
        id:20,
        title :"Tuning of a deformable image registration procedure for skin component mechanical properties assessment",
        abstract:"Several studies report the mechanical properties of skin tissues but their values largely depend on the measurement method. Therefore, we investigated the feasibility of recognizing the cellular constituents mechanical properties of pigmented skin by Confocal Laser Scanner Microscopy (CLSM). With this purpose, an healthy volunteer was examined in two configurations: deforming and non deforming the nevus in three areas nearby the pigmented skin lesion. The mechanical behavior of the nevus was then assessed by means of deformable registration of the images in the two configurations. There exist several registration strategy able to overcome this task, among them, we proposed two strategies with different deformation model: a Free Form Deformation (FFD) based on b-spline and a second one based on Demons Registration Algorithm (DRA). These two strategies need the definition of several parameters in order to obtain optimal registration performances. Thus, we tuned these parameters by means of simulated data and evaluated their registration abilities on real in vivo CLSM acquisitions. The results highlighted that the registration using DRA reached a better performance in comparison to the FFD one, in particular two areas among the three the DRA performance was significantly better than the FFD one. The registration procedure highlighted bio-mechanical differences among the chosen areas.",
        authors:[EM,ElCu,GiSp,AlTe,GiPe,LM],
        journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
        date:"2015",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/26737734" ,
        type:"conference",
        tags:[],
        image:IMG+"montin2015a.png",
        download:"http://150.162.46.34:8080/embc-2015/papers/16272050.pdf"


    },
  {
        id:21,
        title :"Combined approach for the biomechanical characterization of skin lesions",
        abstract:"Melanocytic nevi are common benign skin lesions, known as moles, due to proliferation of melanocytes, the pigmented skin cells. The uncontrolled growth of these cells leads instead to cutaneous malignant melanoma, an aggressive tumour whose rate of survival dramatically increases if early diagnosis is provided. Alteration on the mechanical properties of the skin in presence of lesions has been assessed. In this context, we aim at developing a combined approach consisting of an experimental and a computational study to biomechanically characterize the skin and both malign and benign skin lesions (i.e., nevi and malignant melanoma). In particular, the former study is performed to evaluate the biomechanical response of the different skin layers after the application of a displacement field and relies on a multi-scale strategy, ranging from the tissue level to the cellular level. Computational models will be tuned against experimental data (e.g., confocal laser scanning microscopy data) to estimate the mechanical properties of the different layers of the skin and the skin lesions. In particular, the confocal laser scanning microscopy is able to provide non-invasive histomorphological analysis of skin in vivo. The integration of the experimental and the computational results will allow the evaluation of possible alterations of the local mechanical properties occurring in case of pathological condition.",
        authors:[GaFr,FeCr, ElCu,GrSp,EM,GiSp,AlTe,LM,GiPe],
        journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
        date:"2015",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/26736411" ,
        type:"conference",
        tags:[],
        image:IMG+"cutri2015.png",
        download:undefined


    }, {
        id:22,
        title :"A Full Automatic Method for the Soft Tissues Sarcoma Treatment Response Based on Fuzzy Logic",
        abstract:"Aim of this study was to develop a full automatic method for the soft tissue sarcoma (STS) identification and its evaluation during chemotherapy (CT) treatment, based on diffusion MRI. This procedure includes two main phases, the first one is a registration step in order to compose a coregistered set of images concerning morphological and functional images pre and post CT, registered to the pre-treatment T1. The second phase is a fuzzy characterization of STS diffusive parameter along with a fuzzy inference step for the evaluation of treatment response on the characterized area. The results of this procedure are two membership degree maps which measure the probability for each segmented pixel to be responding or not to CT. These two maps could assist radiologists during follow-up assessment, by automatically extracting the lesion volume, report lesion composition, and measure the uncertainty of the estimate, in order to manage the intrinsic and well-known heterogeneity of STS. Many studies demonstrated the prognostic values of diffusion MRI and the apparent diffusion coefficient (ADC) in the assessment of cellularity changes during therapy and their correlation with lesion response. In this scenario, the proposed framework, allows for a total unsupervised identification and probabilistic evaluation of STS treatment response based on diffusion MRI, mapping the local changes of ADC during therapy rather than describe the whole lesion by a statistical moment.",
        authors:[EM,AnMe,LM],
        journal: "XIII Mediterranean Conference on Medical and Biological Engineering and Computing 2013",
        date:"2014",
        link:"https://link.springer.com/chapter/10.1007/978-3-319-00846-2_55" ,
        type:"conference",
        tags:[],
        image:IMG+"sarcoma.png",
        download:undefined


    }, {
        id:23,
        title :"Coronary stenting: From optical coherence tomography to fluid dynamic simulations",
        abstract:"The presence of stents within coronary arteries alters the hemodynamic condition. Computational fluid dynamics (CFD) simulations offer the possibility to study local hemodynamics of a stented artery to identify the stimuli of instent restenosis, i.e. the local reduction of lumen size after stent deployment. The results of CFD simulations are more accurate when the analyses are performed with a model reproducing real in vivo conditions. For this purpose, optical coherence tomography (OCT) is a promising tool to reconstruct 3D geometries of stented coronary arteries, due to its higher resolution compared to the other imaging techniques. In the present work a reconstruction method of stented coronary bifurcation geometrical models starting from OCT images was developed. An OCT exam performed in a stented coronary bifurcation silicone sample was considered. The vessel and the stent were reconstructed separately, and then they were merged together. Vessel reconstruction was performed with a semi-automatic process: the main branch was reconstructed by fitting the lumen boundary with ellipses and subsequently by creating a mesh of the vessel; the side branch was created like an ideal cylinder. Stent struts were identified with an automatic algorithm; then, the stent was reconstructed in a manual way. After the creation of the 3D geometry of the bifurcation, a transient fluid dynamic simulation was carried out. CFD results showed that the highest risk of restenosis is located in the region near the bifurcation.",
        authors:[ClCh,EM,FrBu,LM,FM],
        journal: "13th IEEE International Conference on BioInformatics and BioEngineering",
        date:"2013",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/26736411" ,
        type:"conference",
        tags:[],
        image:IMG+"chiastra2013.png",
        download:undefined


    }, {
        id:24,
        title :"Whole-body diffusion-weighted magnetic resonance is superior to skeletal X-ray and magnetic resonance of the spine for the assessment of bone disease in multiple myeloma",
        abstract:"Bone disease in multiple myeloma (MM) is routinely assessed by skeletal X-ray (XR) and magnetic resonance of the spine (S-MRI). Diffusion- weighted MRI (DW-MRI) is a functional MRI that detects the changes of water diffusion through cells. This prospective, non-randomized, monocentric phase II study aimed at comparing whole-body DWMRI with XR and S-MRI for the assessment of MM bone lesions. Thirty- six consecutive symptomatic patients at diagnosis or at relapse performed XR, S-MRI, whole-body MRI, and whole-body DW-MRI before treatment, after treatment, and 6 months after the end of the treatment. MRI exams were performed in a single session, and clinical, laboratory and bone marrow evaluations were done at each time point. A substudy evaluated 12 asymptomatic patients at diagnosis, after 6 and 12 months. Radiology exams were independently read by 3 radiologists experienced in MM, and the techniques were compared by the count of segments with focal lesions (FL) (>=5 mm). Diffusion-weighted MRI significantly detected more segments with FL than XR (p=0.01) and SMRI (p=0.02) through all timepoints. After treatment, the DW-MRI and S-MRI detected a significant change of FL consistent with response (p=0.04 for both techniques), whereas XR did not (0.55). Having >4 segments with FL by DW-MRI before treatment predicted a worse progression free survival (PFS, p=0.02) and relapse incidence (p<0.01). In Cox multivariate analysis adjusted for ISS stage, DW-MRI before treatment significantly predicted PFS (p<0.01). After treatment, a positive DW-MRI exam predicted a 3-year 83% relapse risk, and was associated with a worse PFS (p=0.01) and relapse incidence (p=0.01). Diffusionweighted MRI was superior to whole-body MRI through all time points (p<0.01). The substudy of asymptomatic patients showed that DWMRI is superior to XR (p<0.01) and similar to S-MRI (p=0.47). In conclusion, diffusion-weighted MRI is superior to XR and S-MRI in detecting FL in MM and before treatments predicts PFS and relapse. The findings of DW-MRI after treatment correlate with response and are predictive of PFS and relapse.",
        authors:[FrSp,PP, GiTr,EM, ViMo, AlLa,LuMa, PaPa, LM,PaCo],
        journal: "Haematologica (2012)",
        date:"2013",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/26736411" ,
        type:"conference",
        tags:[],
        image:IMG+"montin2012a.png",
        download:undefined


    }, {
        id:25,
        title :"Results of a Prospective Study Comparing Whole-Body Diffusion-Weighted Magnetic Resonance Imaging with Skeletal X-Ray and Magnetic Resonance of the Spine for Assessing Bone Disease in Multiple Myeloma",
        abstract:"Standard assessment of bone disease in multiple myeloma (MM) is based on skeletal X-ray (XR) and magnetic resonance (MR) of the spine (MRS). Diffusion-weighted MR (DW-MR) is a novel functional MR that detects changes of water diffusion through cells in tissues. To assess the value of DW-MR to detect bone lesions in MM, we designed a prospective study comparing whole-body DW-MR with XR and MRS. The study included symptomatic patients (pts) at diagnosis or at relapse before the start of the treatment; they performed XR, MRS, conventional whole-body MR (WB-MR), and whole-body DW-MR at enrolment (time point 1, T1), after treatment (T2), and after 6 months of follow-up (T3). Clinical and hematologic, including bone marrow (BM), disease evaluations were done at the same time points. The study was approved by the Institutional Review Board in 2008 (protocol 44/08).Methods:The primary objective was to assess whether DW-MR could detect more focal lesions (FL) than XR and MRS. Secondary objectives were to correlate the changes of FL detected by DW-RM with response, to assess the prognostic value of DW-RM, and to compare DW-MR with WB-MR. MRS, WB-MR and DW-MR were done in a single 45-minute session on a standard 1.5 Tesla MR scanner. DW-MR consisted of multiple stacked axial Echo Planar Imaging sequences at 4 b-values, evaluated by PET-like Maximum Intensity Projection and Multi-Planar reconstructions at the highest b-value (1000). Each exam was independently read by 3 radiologists experienced in MM. 53 bone segments per exam were evaluated in whole-body imaging (XR, WB-MR and DW-MR); 25 segments were evaluated in spine imaging (MRS and DW-MR). All the patterns (focal, diffuse, mixed, and salt-and-pepper) of bone lesions were recorded. Matching FL detected by >=2 radiologists were counted for the present analysis. Statistics were carried out with the Wilcoxon signed rank test for methods comparisons and the Kruskal-Wallis test to assess intra-patient changes through the time points. Survival and relapse were analyzed by Kaplan-Meier and Cumulative Incidence method with log-rank and Gray's tests. All tests were 2-sided.Results:Between 2008 and 2010, 36 symptomatic pts were enrolled: 43% were at diagnosis, 57% at relapse; 71% of pts had ISS stage 1 MM. The most frequent isotype was IgG (57%), median BM infiltration was 30%. FISH on selected CD138+ plasma cells detected t(4;14) and del(17) in 9 and 6% of pts. At T1, the DW-MR detected more FL than standard XR (306 vs 117 FL, p<0.01), WB-MR (306 vs 225 FL, p=0.02), and MRS (165 vs 116 FL, trend, p=0.08). At T2, a similar number of FL was detected by DW-MR and XR (97 vs 104 FL, p=0.99) and MRS (20 vs 20 FL, p=1.00); DW-MR detected more FL than WB-MR (97 vs 60 FL, p=0.01). At T3, the DW-MR detected more FL than WB-MR (88 vs 45 FL, p<0.01) and MRS (24 vs 11 FL, p=0.05), and similar FL compared to XR (88 vs 62 FL, p=0.27). Considering all the time points, the DW-MR detected more FL than XR (p=0.01), WB-MR (p<0.01) and MRS (p=0.02).Between T1 and T2, all pts were treated with IMIDS or bortezomib–based regimens, 33% underwent a stem cell transplant. Overall response rate (ORR) was 73%. DW-MR detected significant changes of FL according to disease response at T2 (from 79 to 15 FL in >=VGPR, from 69 to 27 in PR, and from 34 to 55 FL in SD or PD, p=0.04 [whole body]; p=0.02 [spine]). Also MRS consistently detected response (p=0.04), whereas WB-MR showed only a weak correlation (p=0.13); XR did not detect response (p=0.55). Between T2 and T3, pts had minor changes of disease status (72% ORR), and, accordingly, all the radiological exams did not show significant changes in FL.One-, 2- and 3-year progression-free survival (PFS) was 80, 62 and 37% (median, 30 months), OS was 88, 79 and 76% (median not reached), and relapse incidence was 15, 32, and 54% (median, 21 months). Since the median number of FL detected by DW-MR at T1 was 4 (range, 0–49 FL), we compared PFS, relapse, and OS by the presence of <=4 FL or >4 FL before treatment. Patients with <=4 FL at DW-MR had better PFS (72 vs 50% at 2 years, p=0.02) and less relapse incidence (17 vs 50%, p<0.01) than those with >4 FL, whereas OS was not different (84 vs 75%, p=0.76).Conclusions:DW-MR is superior to XR, MRS, and WB-MR in detecting FL in MM. The number of FL detected by DW-MR before treatment predicts PFS and relapse incidence. DW-MR is a functional imaging that effectively detects the bone disease changes according to treatment response and can be used to monitor disease response.",
        authors:[FrSp,PP, GiTr,EM, ViMo, AlLa,LuMa, PaPa, LM,PaCo],
        journal: "The Journal of the American Society of Hematology Blood (2012)",
        date:"2013",
        link:"https://ashpublications.org/blood/article/120/21/2913/102443/Results-of-a-Prospective-Study-Comparing-WholeBody" ,
        type:"conference",
        tags:[],
        image:IMG+"montin2012a.png",
        download:undefined

    }, {
        id:26,
        title :"A registration framework for evaluation of T1, T2 and DWI signal intensities in multiple myeloma",
        abstract:"Objective: In this study we point out the Diffusion-Weighted Imaging (DWI) role in the diagnosis of multiple myeloma (MM), comparing its signal values (SV) (Sommer et al., 2010) with the standard imaging modalities T1, T2. We further evaluate how SV change in relation with the percentage of plasma cells infiltration evaluated through bone marrow biopsy (BMB). Methods: Since March 2008 23 patients with average age of 61 (± 11) years old, 11 females and 12 males, have been investigated before their own therapy with a whole body MRI protocol, concerning a whole body T1, a whole body T2 and a whole body DWI and a BMB. An experienced radiologist defined for each patient two volume of interests (VOIs): onto the main lesions and on healthy bones (Femur and Homerus). After that, we have subdivided the full population by a clinical threshold of 25% on cells infiltration percentage; then, we analysed statistical differences in the 2 groups (A, B). Results: We found out that DWI voxels intensities in group A (infiltration ≤ 25%) were higher than group B, this gap had to be considered statistically different (P ≤ 0.05).",
        authors:[EM, PP, LM],
        journal: "BIOSIGNALS 2012 - Proceedings of the International Conference on Bio-Inspired Systems and Signal Processing",
        date:"2012",
        link:"https://moh-it.pure.elsevier.com/en/publications/a-registration-framework-for-evaluation-of-t1-t2-and-dwi-signal-i" ,
        type:"conference",
        tags:[],
        image:IMG+"montin2012.png",
        download:"https://scitepress.org/papers/2012/37775/37775.pdf"

    }, {
        id:27,
        title :"Quantitative characterization and identification of lymph nodes and Nasopharingeal Carcinoma by coregistered magnetic resonance images",
        abstract:"In this study we developed a technique to improve the identification of carcinoma and pathological lymph nodes in cases of Nasopharingeal Carcinoma (NPC), through a quantitative characterization of the tissues based on MR images: 3D VIBE (Volumetric Interpolated Breath-hold Examination) T1-CE (Contrast Enhanced), T1, T2 and Diffusion Weighted Imaging (DWI) for b-values 0,300,500,700,1000. The procedure included two phases: 1) coregistration of volumes and 2) tissue characterization. Concerning the first phase, the DICOM images were reassembled spatially and resampled with isotropic 0.5mm resolution. Coregistration was performed by two multiresolution rigid transformations, merging head and neck volumes, plus a final multiresolution non rigid transformation. The anatomical 3D CE-VIBE volume was taken as reference. The procedure for tissue characterization is semi automated and it required a radiologist to identify an example of tissue from the primary tumor and a metastatic lymph node. We generated a 8-dimensional membership function to perform a fuzzy-like identification of these tissues. The result of this procedure was the generation of two maps, which showed complementary characterization of lymph nodes and carcinoma. A few example will be shown to evidence the potentiality of this method in identification and characterization of NPC lesions.",
        authors:[FaVe,EM, LM,PP],
        journal: "Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
        date:"2012",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/23367133" ,
        type:"conference",
        tags:[],
        image:IMG+"veronese2012.png",
        download:undefined

    }, {
        id:28,
        title :"An effective 3D segmentation method for sinonasal cancer in response to chemoterapy",
        abstract:"Intestinal-Type AdenoCarcinomas (ITAC) arise in the nasal cavity and ethmoid. Theyfrequently have irregular morphology and are adjacent to complex anatomical structures(Figures 1-3). Tumor volume cannot be easily assessed.Response criteria to chemotherapy and/or radiotherapy, either two dimensional (2D)[WHO] or one dimensional (1D) [RECIST] are difficult to apply to tumors of the head &neck, because of irregular shape, morphology and extent. Accurate tumor segmentationto evaluate changes in size and volume is usually performed manually by radiologists.Developing a semi-supervised algorithm could prove an effective and time-sparingalternative.The aim of our study was to develop a semi-supervised segmentation algorithm formagnetic resonance images (MRI) to extract dimensions, boundaries and volumes ofneoplastic lesions. We evaluated its applicability and performance in ITAC massesof the ethmoid and nasal cavities comparing volumetric results obtained by manualsegmentation to algorithm segmentation.",
        authors:[PP,KaPa,LuBr,EM,DaVe,LM],
        journal: "European Society of Radiology March 4-8 2010 Vienna, Austria",
        date:"2010",
        link:"https://epos.myesr.org/esr/viewing/index.php?module=viewing_poster&task=&pi=101103" ,
        type:"conference",
        tags:[],
        image:IMG+"passera2010.png",
        download:"https://epos.myesr.org/esr/viewing/index.php?module=viewing_posteraction&task=downloadpdf&pi=101103"

    },
     {
      id:28.1,
      title :"An efficient and effective segmentation software to investigate the apparent diffusion coefficient in multiple myeloma lesions.",
      abstract:"",
      authors:[EM,PP,LM],
      journal: "II Congresso Nazionale di Bioingegneria, 2010",
      date:"2010",
      link:"https://re.public.polimi.it/handle/11311/580342#.YMJzCZpKikA" ,
      type:"conference",
      tags:[],
      image:IMG+"montin2012a.png",
      download:undefined

  },
     {
      id:28.2,
      title :"Whole-body DWI, whole-body and whole-spine MRI in multiple myeloma",
      abstract:"",
      authors:[PP,FrSp,EM,LM,ViMo,],
      journal: "European Congress of Radiology-ECR 2010",
      date:"2010",
      link:"https://re.public.polimi.it/handle/11311/580342#.YMJzCZpKikA" ,
      type:"conference",
      tags:[],
      image:IMG+"montin2012a.png",
      download:undefined

  }, {
      id:28.3,
      title :"WHOLE-BODY DIFFUSION MRI AND SKELETAL LESIONS IN THYROID CANCER: DIAGNOSTIC AND THERAPEUTIC IMPLICATIONS",
      abstract:"Forty-fifty percent of the patients with metastatic TC suffer from bone metastases. 99mTc scintigraphy is employed to assess bone lesions although it lacks of accuracy, mostly in lytic lesions of differentiated thyroid cancer (DTC). CT scan has a sensitivity of 71-100% while data on the accuracy of 18F-FDG-PET/CT are scanty. MRI captures both bone and bone marrow involvement, more common in medullary thyroid cancer (MTC). Whole body MRI (WB) and whole-body diffusion (WB-DWI) are emerging as accurate tools for detection and therapy monitoring of bone metastases. We investigated the role of WB and WB-DWI in bone lesions from TC i) sensitivity and specificity; ii) evaluation of response during TKIs.",
      authors:[LaLo,FrSp,RGr,AGi,ECi,PaBo,EM,LL],
      journal: "European Thyroid Journal",
      date:"2010",
      link:"https://www.sciencedirect.com/science/article/pii/S0923753420336073" ,
      type:"conference",
      tags:[],
      image:IMG+"montin2012a.png",
      download:undefined

  },
   {
        id:29,
        title :"Exploring cortical attentional system by using fMRI during a continuous perfomance test",
        abstract:"Functional magnetic resonance imaging (fMRI) was performed in eight healthy subjects to identify the localization, magnitude, and volume extent of activation in brain regions that are involved in blood oxygen level-dependent (BOLD) response during the performance of Conners' Continuous Performance Test (CPT). An extensive brain network was activated during the task including frontal, temporal, and occipital cortical areas and left cerebellum. The more activated cluster in terms of volume extent and magnitude was located in the right anterior cingulate cortex (ACC). Analyzing the dynamic trend of the activation in the identified areas during the entire duration of the sustained attention test, we found a progressive decreasing of BOLD response probably due to a habituation effect without any deterioration of the performances. The observed brain network is consistent with existing models of visual object processing and attentional control and may serve as a basis for fMRI studies in clinical populations with neuropsychological deficits in Conners' CPT performance.",
        authors:[MaTa,EM,SeCe, AnBi],
        journal: "Computational Intelligence and Neuroscience",
        date:"2009",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/20011033" ,
        type:"article",
        tags:[],
        image:IMG+"tana.png",
        download:"https://downloads.hindawi.com/journals/cin/2010/329213.pdf"

    }, {
        id:30,
        title :"A web-based tool for cooperating behaviors in eating and physical activity control.",
        abstract:"The field of information technology and the Internet for health care hasdeveloped rapidly in the last few years. Furthermore, new servicesdevoted to improve personalized healthcare are emerging from currentweb-orientated research. Control of eating and physical activitybehaviors can be performed in a computer mediated way as a socialnetworking application. To this purpose, we designed and implemented aweb application based on the cooperation between two communities:Patients and Nutritionists. The patients are able to cooperate as withina self-help group, while nutritionists can guide patients strugglingwith incorrect lifestyle and its consequences.",
        authors:[StBo,YlPr,SeMa,EM,FePa,MaMas,FrPi],
        journal: "ANNUAL REVIEW OF CYBERTHERAPY AND TELEMEDICINE 2009: ADVANCED TECHNOLOGIES IN THE BEHAVIORAL, SOCIAL AND NEUROSCIENCES",
        date:"2009",
        link:"https://psycnet.apa.org/record/2009-17266-037" ,
        type:"article",
        tags:[],
        image:IMG+"bonacina.png",
        download:"https://issuu.com/bepperiva/docs/arctt_2009/168"

    }, {
        id:31,
        title :"A web-based tool for cooperating behaviors in eating and physical activity control.",
        abstract:"The field of information technology and the Internet for health care has developed rapidly in the last few years. Furthermore, new services devoted to improve personalized healthcare are emerging from current web-orientated research. Control of eating and physical activity behaviors can be performed in a computer mediated way as a social networking application. To this purpose, we designed and implemented a web application based on the cooperation between two communities: Patients and Nutritionists. The patients are able to cooperate as within a self-help group, while nutritionists can guide patients struggling with incorrect lifestyle and its consequences.",
        authors:[StBo,YlPr,SeMa,EM,FePa,MaMas,FrPi],
        journal: "Studies in Health Technology and Informatics",
        date:"2009",
        link:"https://www.ncbi.nlm.nih.gov/pubmed/19592754" ,
        type:"article",
        tags:[],
        image:IMG+"bonacina.png",
        download:undefined

    }



// }
];

