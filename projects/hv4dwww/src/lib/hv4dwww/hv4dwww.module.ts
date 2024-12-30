import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { hv4dhvid  } from '../../lib/hv4dhvid/hv4dhvid';
import { hv4dpixels } from '../../lib/hv4dpixels/hv4dpixels';
import { hv4dcolorcard } from '../hv4dcolorcard/hv4dcolorcard';
import { hv4dpanel } from '../../lib/hv4dpanel/hv4dpanel';

import { hv4danimico } from '../../widget/hv4danimico/hv4danimico';
import { hv4dauto } from '../../widget/hv4dauto/hv4dauto';
import { hv4dbanner } from '../../widget/hv4dbanner/hv4dbanner';
import { hv4dbar } from '../../widget/hv4dbar/hv4dbar';
import { hv4dborder } from '../../widget/hv4dborder/hv4dborder';
import { hv4dbutton } from '../../widget/hv4dbutton/hv4dbutton';
import { hv4dcalendar } from '../../widget/hv4dcalendar/hv4dcalendar';
import { hv4dcheckbox } from '../../widget/hv4dcheckbox/hv4dcheckbox';
import { hv4dcolorpicker } from '../../widget/hv4dcolorpicker/hv4dcolorpicker';
import { hv4dcombobox } from '../../widget/hv4dcombobox/hv4dcombobox';
import { hv4dcontact } from '../../widget/hv4dcontact/hv4dcontact';
import { hv4dcontextmenu } from '../../widget/hv4dcontextmenu/hv4dcontextmenu';
import { hv4ddatepicker } from '../../widget/hv4ddatepicker/hv4ddatepicker';
import { hv4ddialog } from '../../widget/hv4ddialog/hv4ddialog';
import { hv4ddropdown } from '../../widget/hv4ddropdown/hv4ddropdown';
import { hv4dexpander } from '../../widget/hv4dexpander/hv4dexpander';
import { hv4dflipview } from '../../widget/hv4dflipview/hv4dflipview';
import { hv4dflyout } from '../../widget/hv4dflyout/hv4dflyout';
import { hv4dforms } from '../../widget/hv4dforms/hv4dforms';
import { hv4dgridview, hv4dgridcolumn, hv4dgridcolumns, hv4dgridrow, hv4dgridrows } from '../../widget/hv4dgridview/hv4dgridview';
import { hv4dhyperlink } from '../../widget/hv4dhyperlink/hv4dhyperlink';
import { hv4dimage } from '../../widget/hv4dimage/hv4dimage';
import { hv4dinfobar } from '../../widget/hv4dinfobar/hv4dinfobar';
import { hv4dlistview } from '../../widget/hv4dlistview/hv4dlistview';
import { hv4dmap } from '../../widget/hv4dmap/hv4dmap';
import { hv4dmedia } from '../../widget/hv4dmedia/hv4dmedia';
import { hv4dmenubar } from '../../widget/hv4dmenubar/hv4dmenubar';
import { hv4dnavview } from '../../widget/hv4dnavview/hv4dnavview';
import { hv4dnumberbox } from '../../widget/hv4dnumberbox/hv4dnumberbox';
import { hv4dpagination } from '../../widget/hv4dpagination/hv4dpagination';
import { hv4dpasswordbox } from '../../widget/hv4dpasswordbox/hv4dpasswordbox';
import { hv4dprogress } from '../../widget/hv4dprogress/hv4dprogress';
import { hv4dradiobutton } from '../../widget/hv4dradiobutton/hv4dradiobutton';
import { hv4drating } from '../../widget/hv4drating/hv4drating';
import { hv4dricheditbox } from '../../widget/hv4dricheditbox/hv4dricheditbox';
import { hv4drichtextblock } from '../../widget/hv4drichtextblock/hv4drichtextblock';
import { hv4dscrollviewer } from '../../widget/hv4dscrollviewer/hv4dscrollviewer';
import { hv4dshape } from '../../widget/hv4dshape/hv4dshape';
import { hv4dslider } from '../../widget/hv4dslider/hv4dslider';
import { hv4dsplitbutton } from '../../widget/hv4dsplitbutton/hv4dsplitbutton';
import { hv4dsplitview } from '../../widget/hv4dsplitview/hv4dsplitview';
import { hv4dswipe } from '../../widget/hv4dswipe/hv4dswipe';
import { hv4dtabview } from '../../widget/hv4dtabview/hv4dtabview';
import { hv4dtextblock } from '../../widget/hv4dtextblock/hv4dtextblock';
import { hv4dtextbox } from '../../widget/hv4dtextbox/hv4dtextbox';
import { hv4dtimepicker } from '../../widget/hv4dtimepicker/hv4dtimepicker';
import { hv4dtogglebutton } from '../../widget/hv4dtogglebutton/hv4dtogglebutton';
import { hv4dtoggleswitch } from '../../widget/hv4dtoggleswitch/hv4dtoggleswitch';
import { hv4dtooltip } from '../../widget/hv4dtooltip/hv4dtooltip';
import { hv4dtreeview } from '../../widget/hv4dtreeview/hv4dtreeview';
import { hv4dtwopaneview } from '../../widget/hv4dtwopaneview/hv4dtwopaneview';
import { hv4dwebview } from '../../widget/hv4dwebview/hv4dwebview';

@NgModule({
  declarations: [
    hv4dhvid, 
    hv4dpixels,
    hv4dcolorcard,
    hv4dpanel,
    hv4danimico,
    hv4dauto,
    hv4dbanner,
    hv4dbar,
    hv4dborder,
    hv4dbutton,
    hv4dcalendar,
    hv4dcheckbox,
    hv4dcolorpicker,
    hv4dcombobox,
    hv4dcontact,
    hv4dcontextmenu,
    hv4ddatepicker,
    hv4ddialog,
    hv4ddropdown,
    hv4dexpander,
    hv4dflipview,
    hv4dflyout,
    hv4dforms,
    hv4dgridview,
    hv4dgridcolumn,
    hv4dgridcolumns,
    hv4dgridrow,
    hv4dgridrows,
    hv4dhyperlink,
    hv4dimage,
    hv4dinfobar,
    hv4dlistview,
    hv4dmap,
    hv4dmedia,
    hv4dmenubar,
    hv4dnavview,
    hv4dnumberbox,
    hv4dpagination,
    hv4dpasswordbox,
    hv4dprogress,
    hv4dradiobutton,
    hv4drating,
    hv4dricheditbox,
    hv4drichtextblock,
    hv4dscrollviewer,
    hv4dshape,
    hv4dslider,
    hv4dsplitbutton,
    hv4dsplitview,
    hv4dswipe,
    hv4dtabview,
    hv4dtextblock,
    hv4dtextbox,
    hv4dtimepicker,
    hv4dtogglebutton,
    hv4dtoggleswitch,
    hv4dtooltip,
    hv4dtreeview,
    hv4dtwopaneview,
    hv4dwebview
  ],
  imports: [
    CommonModule
  ],
  exports: [
    hv4dhvid, 
    hv4dpixels,
    hv4dcolorcard,
    hv4dpanel,
    hv4danimico,
    hv4dauto,
    hv4dbanner,
    hv4dbar,
    hv4dborder,
    hv4dbutton,
    hv4dcalendar,
    hv4dcheckbox,
    hv4dcolorpicker,
    hv4dcombobox,
    hv4dcontact,
    hv4dcontextmenu,
    hv4ddatepicker,
    hv4ddialog,
    hv4ddropdown,
    hv4dexpander,
    hv4dflipview,
    hv4dflyout,
    hv4dforms,
    hv4dgridview,
    hv4dgridcolumn,
    hv4dgridcolumns,
    hv4dgridrow,
    hv4dgridrows,
    hv4dhyperlink,
    hv4dimage,
    hv4dinfobar,
    hv4dlistview,
    hv4dmap,
    hv4dmedia,
    hv4dmenubar,
    hv4dnavview,
    hv4dnumberbox,
    hv4dpagination,
    hv4dpasswordbox,
    hv4dprogress,
    hv4dradiobutton,
    hv4drating,
    hv4dricheditbox,
    hv4drichtextblock,
    hv4dscrollviewer,
    hv4dshape,
    hv4dslider,
    hv4dsplitbutton,
    hv4dsplitview,
    hv4dswipe,
    hv4dtabview,
    hv4dtextblock,
    hv4dtextbox,
    hv4dtimepicker,
    hv4dtogglebutton,
    hv4dtoggleswitch,
    hv4dtooltip,
    hv4dtreeview,
    hv4dtwopaneview,
    hv4dwebview
  ],
})
export class Hv4dwwwModule { }
