import { Publication,Authors } from './publications';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

var _iCCU="Institute of Cardiology, Catholic University of the Sacred Heart, Rome, Italy";
var _iODC="Fondazione Toscana G. Monasterio, Ospedale Del Cuore, Massa, Italy";

var EM={id:1,name:"Eros", surname:"Montin",affiliation:"dd"};
var RL={id:2,name:"Riccardo", surname:"Lattanzi",affiliation:"dd"};
var CC={id:3,name:"Christopher", surname:"Collins",affiliation:"dd"};
var GC={id:4,name:"Giuseppe", surname:"Carluccio",affiliation:"dd"};
var RoWi={id:4,name:"Roy", surname:"Wiggins",affiliation:"dd"};
var ToBl={id:4,name:"Tobias", surname:"Block",affiliation:"dd"};




var Mle={id:4,name:"M", surname:"Levi",affiliation:""}
var CCr={id:4,name:"C", surname:"Credi",affiliation:""}

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
var DzSe={id:4,name:"Dzemila", surname:"Sero",affiliation:"poli"};
var PP={id:4,name:"Paolo", surname:"Potepan",affiliation:"int"};

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
var PaBo={id:4,name:"Paolo", surname:"Bossi",affiliation:"int"};



var SuMi={id:4,name:"Susanna", surname:"Migliori",affiliation:"poli"};
var ClCh={id:4,name:"Claudio", surname:"Chiastra",affiliation:"poli"};
var FM={id:4,name:"Francesco", surname:"Migliavacca",affiliation:"poli"};
var GaDu={id:4,name:"Gabriele", surname:"Dubini",affiliation:"poli"};
var LoGe={id:4,name:"Lorenzo", surname:"Genuardi",affiliation:"poli"};

var CrAu={id:4,name:"Cristina", surname:"Aurigemma",affiliation:""};
var FrBu={id:4,name:"Francesco", surname:"Burzotta",affiliation:""};
var DaSm={id:4,name:"David", surname:"Hildick-Smith",affiliation:""};
var JaCo={id:4,name:"James", surname:"Cockburn",affiliation:""};


var AnMe={id:4,name:"Antonella", surname:"Messina",affiliation:"int"};
var FrGr={id:4,name:"Francesca G.", surname:"Greco",affiliation:"int"};

var PaCa={id:4,name:"Paolo", surname:"Casali",affiliation:"int"}
var AlGr={id:4,name:"Alessangro", surname:"Gronchi",affiliation:"int"}
var AlMa={id:4,name:"Alessandro", surname:"Marchianò",affiliation:"int"}


var ElCu={id:4,name:"Elena", surname:"Cutrì",affiliation:"poli"}
var GaFr={id:4,name:"Gaia", surname:"franzetti",affiliation:"int"}
var FeCr={id:4,name:"Federica", surname:"Crippa",affiliation:"int"}
var GiSp={id:4,name:"Giuseppe", surname:"Spdola",affiliation:"ieo"}
var AlTe={id:4,name:"lessandro", surname:"Testori",affiliation:"ieo"}
var GiPe={id:4,name:"Giancarlo", surname:"Pennati",affiliation:"poli"}




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
var _tir="image registration";
var _tis="image segmentation";
var _tped="pediatric";
var _tbrain="brain";
var _tneuro="neuro";
var _toncology="oncology";
var _ttretresp="treatmentresponse";
var _thn="H&N";
var _tsarcomas="softtissuessarcomas";
var _trecist="RECIST";
var _tfeatureselection="featuresselection";
var _tml="machine learning";
var _tcloud="cloud computing";
var _twebapp="webgui";
var _tstaging ="staging";
var _tradiotherapy ="radiotherapy";

var IMG="http://biodimensional.com/RESOURCES/img/";
var DOC="http://biodimensional.com/RESOURCES/doc/";

export const PUBLICATIONS: Publication[] = [

{   
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
 download:undefined
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
    download:DOC + "bologna2019.pdf"
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
    download:DOC + "bolo2018.pdf"
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
    download:undefined

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
    download:DOC + "vaco2018.pdf"
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
    journal: "PLoS",
    date: "2017",
    link: "https://www.ncbi.nlm.nih.gov/pubmed/28574987",
    type:"article",
    tags:[_tcardio,_tcsd,_tcad,_tis,_toct],
    image:IMG+ "chiastra2017.png",
    download:DOC + "chiastra2017.pdf"
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
    download:DOC+"montin2015.pdf",
    
    
},
//   {
//     id:18,
//     title :"Biomechanical evaluation of skin and melanocytic naevi",
//     abstract:undefined,
//     authors:[ElCu,GaFr,FeCr,EM,GiSp,AlTe,LM,GiPe],
//     journal: undefined,
//     date:undefined ,
//     link:undefined ,
//     type:"conference",
//     tags:[],
//     image:IMG+"cutri2015.png",
//     download:DOC + "cutri2015.pdf"
    
    
// },
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
//   {
//     id:20,
//     title :undefined,
//     abstract:undefined,
//     authors:[],
//     journal: undefined,
//     date:undefined ,
//     link:undefined ,
//     type:undefined,
//     tags:[],
//     image:undefined,
//     download:undefined
    
    
// }
];

