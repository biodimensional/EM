import { Publication,Authors } from './publications';



var EM={id:1,name:"Eros", surname:"Montin",affiliation:"dd"};
var RL={id:2,name:"Riccardo", surname:"Lattanzi",affiliation:"dd"};
var CC={id:3,name:"Christopher", surname:"Collins",affiliation:"dd"};
var GC={id:4,name:"Giuseppe", surname:"Carluccio",affiliation:"dd"};
var RoWi={id:4,name:"Roy", surname:"Wiggins",affiliation:"dd"};
var ToBl={id:4,name:"Tobias", surname:"Block",affiliation:"dd"};





var AB={id:4,name:"Antonella", surname:"Belfatto",affiliation:"poli"};
var MB={id:4,name:"Marco", surname:"Bologna",affiliation:"poli"};
var SM={id:4,name:"Silvia", surname:"Meroni",affiliation:"int"};
var ClCa={id:4,name:"Claudia", surname:"Cavatorta",affiliation:"int"};
var EP={id:4,name:"Emilia", surname:"Pecori",affiliation:"int"};
var BaDi={id:4,name:"Barbara", surname:"Diletto",affiliation:"int"};
var MaMa={id:4,name:"Maura", surname:"Massimino",affiliation:"int"};
var MaO={id:4,name:"Maria Chiara", surname:"Oprandi",affiliation:"lnf"};
var GP={id:4,name:"Geraldina", surname:"Poggi",affiliation:"lnf"};
var FA={id:4,name:"Filippo", surname:"Arrigoni",affiliation:"lnf"};
var DP={id:4,name:"Denis", surname:"Peruzzo",affiliation:"lnf"};
var EmPi={id:4,name:"Emanuele", surname:"Pignoli",affiliation:"int"};
var LG={id:4,name:"Lorenza", surname:"Gandola",affiliation:"int"};
var PC={id:4,name:"Pietro", surname:"Cerveri",affiliation:"poli"};
var LM={id:4,name:"Luca", surname:"Mainardi",affiliation:"poli"};
var VaCo={id:4,name:"Valentina", surname:"Corino",affiliation:"poli"};


var MLe={id:4,name:"M", surname:"Lecchi",affiliation:""};
var FrSp= {id:4,name:"F", surname:"Spreafico",affiliation:"int"};
var ESc= {id:4,name:"E", surname:"Schiavello",affiliation:"int"};
var PaVe = {id:4,name:"Paolo", surname:"Verderio",affiliation:"int"};
var VBi = {id:4,name:"V", surname:"Biassoni",affiliation:"int"};

var RaRa={id:4,name:"Rajiv", surname:"Rampat",affiliation:"poli"};



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
var _tcardio="cardionvascular imaging";
var _tem="electromagnetic fields";
var _tir="image registration";
var _tis="image segmentation";
var _tped="pediatric";
var _tbrain="brain";
var _tneuro="neuro";
var _toncology="oncology";
var _ttretresp="treatment response";
var _thn="H&N";
var _tsarcomas="soft tissues sarcomas";
var _trecist="RECIST";
var _tfeatureselection="features selection";
var _tml="machine learning";
var _tcloud="cloud computing";
var _twebapp="webgui";

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
    authors:[EM,AB,MB,SM,ClCa,EP,BaDi,MaMa,MaO,GP,FA,DP,EmPi,LG,PC,LM],
    journal: "Medical & Biological Engineering & Computing",
    date: "2020",
    link: "https://link.springer.com/article/10.1007/s11517-019-02109-4",
    type:"article",
    tags:[ _tmri, _tir, _tis, _tneuro, _tped, _toncology, _tbrain, _tdwi, _tdti],
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
    id:1,
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


// {   
//     id:8,
//     title :"A patient-specific study investigating the relation between coronary hemodynamics and neo-intimal thickening after bifurcation stenting with a polymeric bioresorbable scaffold",
//     abstract:"We present an application of a validated reconstruction methodology for the comparison between patient-specific hemodynamics and neo-intimal thickening at nine months from the intervention. (1) Background: Coronary bifurcation stenting alters the vessel geometry, influencing the local hemodynamics. The evaluation of wall shear stress (WSS) relies on the application of computational fluid dynamics to model its distribution along the coronary tree. The endothelium actively responds to WSS, which triggers eventual cell proliferation to cover the stent struts. (2) Methods: Baseline optical coherence tomography and angiographic data were combined to reconstruct a patient-specific coronary bifurcation with an implanted bioresorbable scaffold and to simulate the hemodynamics. Results were linked with the neo-intimal thickening after nine months from the intervention. (3) Results: Blood velocity patterns were disrupted at the bifurcation due to the presence of the stent. It was observed that 55.6% of the scaffolded lumen surface was exposed to values of time-averaged WSS lower than 0.4 Pa. Follow-up images showed a luminal narrowing of 19% in the main branch. There was also a complete coverage in 99% of struts. (4) Conclusions: This approach provided valuable complementary information that might improve the clinical outcomes in this subset of coronary diseases.", 
//     authors:[SuMi,RaRa,MB,EM,FrBu,DaSm,GaDu,LM,FM,JaCo,ClCh],
//     journal: "Applied Science",
//     date: "2018",
//     link: "https://www.mdpi.com/2076-3417/8/9/1510",
//     type:"article",
//     tags:[tmri],
//     image:"https://www.mdpi.com/applsci/applsci-08-01510/article_deploy/html/images/applsci-08-01510-g004-550.jpg"
// //    DOI:10.1007/s11517-019-02109-4
// }
// ,
// {   
//     id:8,
//     title :"Retrospective study of late radiation damages after focal radiotherapy for childhood brain tumors",
//     abstract:"Purpose: Investigate late radiation damages after focal radiotherapy (RT) for childhood brain cancer in terms of neurocognitive outcome. Methods 45 retrospective children (age at RT:median = 6.2 years, range 1.1–22.5, age at valuations:median = 11.1 years, range 4.4–25.9) who received focal RT at our Institution with at least 3-years follow-up without relapse, were recruited to undergo cognitive, neuropsychological and psychological testing. Planning CT images were retrieved and patients’ brains were parceled in 116 regions of interest (ROIs) using the Tzourio-Mazoyer atlas [1] and a dedicated home-made, multimodal, highly deformable registration framework specifically developed for the study. Mean RT dose value was collected for each ROI. The pattern of association between the categorized cognitive tests scores and RT dose was assessed in each ROI through the Kruskal Wallis test. Subsequently, the preliminary threshold of RT dose (optimal cut-off value) discriminating patients with and without neurocognitive changes (impaired/non-impaired patients), was selected by using a Receiver Operating Characteristic curve (ROC). Results The statistical analysis allowed us to identify the ROIs where mean dose values and cognitive tests results were significantly related. For the 29 ROIs showing the most significant associations, preliminary threshold dose values related to a specific cognitive or neuropsychological damage were obtained, ranging from 3.5 to 29.8 Gy. As an example, Figure1 shows the distributions of dose values in the ROI “Frontal_ Sup_Orb_ R” for patients with impaired/non-impaired performances in a specific cognitive test (Processing Speed Index, WISC III). Conclusions The preliminary analysis of the retrospective children suggested that the main aim (identify brain structures highly susceptible to radiation damages and the respective radiation dose thresholds) is achievable, justifying a prospective study currently open to children enrollment. Partially funded by AIRC.",
//     authors:[SM,ClCa,MLe,EM,MaO,EP,FrSp,BaDi,VBi,ESc,FA,MaMa,LM,PaVe,EmPi,LG],
//     journal: "Physica Medica",
//     date: "2018",
//     link: "https://www.sciencedirect.com/science/article/abs/pii/S1120179718301194",
//     type:"article",
//     tags:[tmri],
//     image:"https://pbs.twimg.com/media/B2UMHRSIgAASkKV.png"
// //    DOI:10.1007/s11517-019-02109-4
// },
// {   
//     id:8,
//     title :"Use of apparent diffusion coefficient images to predict response to induction chemotherapy in sinonasal cancer.",
//     abstract:"The purpose of this study is to identify a set of radiomic features extracted from apparent diffusion coefficient (ADC) maps, obtained using baseline diffusion weighted magnetic resonance imaging (DW-MRI), which are able to predict the outcome of induction chemotherapy (IC) in sinonasal cancers. Such prediction could help the clinician defining the better treatment for a particular patient. Eighty-eight radiomic features were extracted from the ADC maps of 15 patients that underwent IC. A preliminary filtering of the features was made by assessing their stability to geometrical transformations of the region of interest (ROI). Mann-Whitney tests corrected for control of false discoveries were performed to identify the features that could discriminate between responsive and nonresponsive patients (4 and 11 respectively). Twenty features were found to be able to discriminate the two groups and they can potentially be used for prediction of response to treatment.",
//     authors:[MB,EM,VaCo,PaBo,GiCa,LM],
//     journal: "Proceedings of the Annual International Conference of the IEEE Engineering in Medicine and Biology Society, EMBS",
//     date: "2018",
//     link: "https://www.ncbi.nlm.nih.gov/pubmed/30440511",
//     type:"article",
//     tags:[tmri],
//     image:"http://biodimensional.com/RESOURCES/img/MB.png"
// //    DOI:10.1007/s11517-019-02109-4
// },
// {   
//     id:8,
//     title :"Radiomic analysis of soft tissues sarcomas can distinguish intermediate from high-grade lesions",
//     abstract:"Purpose: To assess the feasibility of grading soft tissue sarcomas (STSs) using MRI features (radiomics). Materials and Methods: MRI (echo planar SE, 1.5T) from 19 patients with STSs and a known histological grading, were retrospectively analyzed. The apparent diffusion coefficient (ADC) maps, obtained by diffusion-weighted imaging acquisitions, were analyzed through 65 radiomic features, intensity-based (first order statistics, FOS) and texture (gray level co-occurrence matrix, GLCM; and gray level run length matrix, GLRLM) features. Feature selection (sequential forward floating search) and classification (k-nearest neighbor classifier) were performed to distinguish intermediate- from high-grade STSs. Classification was performed using the three different sub-groups of features separately as well as all the features together. The entire dataset was divided in three subsets: the training, validation and test set, containing, respectively, 60, 30, and 10% of the data. Results: Intermediate-grade lesions had a higher and less disperse ADC values compared with high-grade ones: most of FOS related to intensity are higher for the intermediate-grade STSs, while FOS related to signal variability were higher in the high grade (e.g., the feature variance is 2.6*10 5 ± 0.9*10 5 versus 3.3*10 5 ± 1.6*10 5 , P = 0.3). The GLCM features related to entropy and dissimilarity were higher in the high-grade. When performing classification, the best accuracy is obtained with a maximum of three features for each subgroup, FOS features being those leading to the best classification (validation set: FOS accuracy 0.90 ± 0.11, area under the curve [AUC] 0.85 ± 0.16; test set: FOS accuracy 0.88 ± 0.25, AUC 0.87 ± 0.34). Conclusion: Good accuracy and AUC could be obtained using only few Radiomic features, belonging to the FOS class.",
//     authors:[MB,EM,VaCo,PaBo,GiCa,LM],
//     journal: "Journal of Magneti Resoncace JMRI",
//     date: "2018",
//     link: "https://www.ncbi.nlm.nih.gov/pubmed/28653477",
//     type:"article",
//     tags:[tmri],
//     image:"http://biodimensional.com/RESOURCES/img/VaCoEM.png"
// //    DOI:10.1007/s11517-019-02109-4
// }
];



