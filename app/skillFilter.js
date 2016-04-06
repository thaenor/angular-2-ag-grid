System.register(['./refData'], function(exports_1) {
    var refData_1;
    var SKILL_TEMPLATE, FILTER_TITLE, SkillFilter;
    return {
        setters:[
            function (refData_1_1) {
                refData_1 = refData_1_1;
            }],
        execute: function() {
            SKILL_TEMPLATE = '<label style="border: 1px solid lightgrey; margin: 4px; padding: 4px; display: inline-block;">' +
                '  <span>' +
                '    <div style="text-align: center;">SKILL_NAME</div>' +
                '    <div>' +
                '      <input type="checkbox"/>' +
                '      <img src="/images/skills/SKILL.png" width="30px"/>' +
                '    </div>' +
                '  </span>' +
                '</label>';
            FILTER_TITLE = '<div style="text-align: center; background: lightgray; width: 100%; display: block; border-bottom: 1px solid grey;">' +
                '<b>TITLE_NAME</b>' +
                '</div>';
            SkillFilter = (function () {
                function SkillFilter() {
                }
                SkillFilter.prototype.init = function (params) {
                    this.filterChangedCallback = params.filterChangedCallback;
                    this.model = {
                        android: false,
                        css: false,
                        html5: false,
                        mac: false,
                        windows: false
                    };
                };
                ;
                SkillFilter.prototype.getGui = function () {
                    var eGui = document.createElement('div');
                    eGui.style.width = '380px';
                    var eInstructions = document.createElement('div');
                    eInstructions.innerHTML = FILTER_TITLE.replace('TITLE_NAME', 'Custom Skills Filter');
                    eGui.appendChild(eInstructions);
                    var that = this;
                    refData_1.default.IT_SKILLS.forEach(function (skill, index) {
                        var skillName = refData_1.default.IT_SKILLS_NAMES[index];
                        var eSpan = document.createElement('span');
                        var html = SKILL_TEMPLATE.replace("SKILL_NAME", skillName).replace("SKILL", skill);
                        eSpan.innerHTML = html;
                        var eCheckbox = eSpan.querySelector('input');
                        eCheckbox.addEventListener('click', function () {
                            that.model[skill] = eCheckbox.checked;
                            that.filterChangedCallback();
                        });
                        eGui.appendChild(eSpan);
                    });
                    return eGui;
                };
                ;
                SkillFilter.prototype.doesFilterPass = function (params) {
                    var rowSkills = params.data.skills;
                    var model = this.model;
                    var passed = true;
                    refData_1.default.IT_SKILLS.forEach(function (skill) {
                        if (model[skill]) {
                            if (!rowSkills[skill]) {
                                passed = false;
                            }
                        }
                    });
                    return passed;
                };
                ;
                SkillFilter.prototype.isFilterActive = function () {
                    var model = this.model;
                    var somethingSelected = model.android || model.css || model.html5 || model.mac || model.windows;
                    return somethingSelected;
                };
                ;
                return SkillFilter;
            })();
            exports_1("default", SkillFilter);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsRmlsdGVyLnRzIl0sIm5hbWVzIjpbIlNraWxsRmlsdGVyIiwiU2tpbGxGaWx0ZXIuY29uc3RydWN0b3IiLCJTa2lsbEZpbHRlci5pbml0IiwiU2tpbGxGaWx0ZXIuZ2V0R3VpIiwiU2tpbGxGaWx0ZXIuZG9lc0ZpbHRlclBhc3MiLCJTa2lsbEZpbHRlci5pc0ZpbHRlckFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7UUFFSSxjQUFjLEVBV2QsWUFBWTs7Ozs7OztZQVhaLGNBQWMsR0FDZCxnR0FBZ0c7Z0JBQ2hHLFVBQVU7Z0JBQ1YsdURBQXVEO2dCQUN2RCxXQUFXO2dCQUNYLGdDQUFnQztnQkFDaEMsMERBQTBEO2dCQUMxRCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsVUFBVSxDQUFDO1lBRVgsWUFBWSxHQUNaLHNIQUFzSDtnQkFDdEgsbUJBQW1CO2dCQUNuQixRQUFRLENBQUM7WUFFYjtnQkFBQUE7Z0JBbUVBQyxDQUFDQTtnQkE5RFdELDBCQUFJQSxHQUFaQSxVQUFhQSxNQUFNQTtvQkFDZkUsSUFBSUEsQ0FBQ0EscUJBQXFCQSxHQUFHQSxNQUFNQSxDQUFDQSxxQkFBcUJBLENBQUNBO29CQUMxREEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0E7d0JBQ1RBLE9BQU9BLEVBQUVBLEtBQUtBO3dCQUNkQSxHQUFHQSxFQUFFQSxLQUFLQTt3QkFDVkEsS0FBS0EsRUFBRUEsS0FBS0E7d0JBQ1pBLEdBQUdBLEVBQUVBLEtBQUtBO3dCQUNWQSxPQUFPQSxFQUFFQSxLQUFLQTtxQkFDakJBLENBQUNBO2dCQUNOQSxDQUFDQTs7Z0JBRU9GLDRCQUFNQSxHQUFkQTtvQkFDSUcsSUFBSUEsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3pDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxHQUFHQSxPQUFPQSxDQUFDQTtvQkFDM0JBLElBQUlBLGFBQWFBLEdBQUdBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNsREEsYUFBYUEsQ0FBQ0EsU0FBU0EsR0FBR0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsRUFBRUEsc0JBQXNCQSxDQUFDQSxDQUFDQTtvQkFDckZBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLGFBQWFBLENBQUNBLENBQUNBO29CQUVoQ0EsSUFBSUEsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7b0JBRWhCQSxpQkFBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsS0FBS0EsRUFBRUEsS0FBS0E7d0JBQzVDLElBQUksU0FBUyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMzQyxJQUFJLElBQUksR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUNuRixLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzt3QkFFdkIsSUFBSSxTQUFTLEdBQXNCLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2hFLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQzs0QkFDdEMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxDQUFDO3dCQUVILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBO2dCQUNoQkEsQ0FBQ0E7O2dCQUVPSCxvQ0FBY0EsR0FBdEJBLFVBQXVCQSxNQUFNQTtvQkFFekJJLElBQUlBLFNBQVNBLEdBQUdBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO29CQUNuQ0EsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxJQUFJQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFFbEJBLGlCQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFVQSxLQUFLQTt3QkFDckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3BCLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ25CLENBQUM7d0JBQ0wsQ0FBQztvQkFDTCxDQUFDLENBQUNBLENBQUNBO29CQUVIQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDbEJBLENBQUNBOztnQkFFT0osb0NBQWNBLEdBQXRCQTtvQkFDSUssSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxJQUFJQSxpQkFBaUJBLEdBQUdBLEtBQUtBLENBQUNBLE9BQU9BLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLEtBQUtBLElBQUlBLEtBQUtBLENBQUNBLEdBQUdBLElBQUlBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBO29CQUNoR0EsTUFBTUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQTtnQkFDN0JBLENBQUNBOztnQkFHTEwsa0JBQUNBO1lBQURBLENBbkVBLEFBbUVDQSxJQUFBO1lBbkVELGlDQW1FQyxDQUFBIiwiZmlsZSI6InNraWxsRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZkRhdGEgZnJvbSAnLi9yZWZEYXRhJztcclxuXHJcbnZhciBTS0lMTF9URU1QTEFURSA9XHJcbiAgICAnPGxhYmVsIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5OyBtYXJnaW46IDRweDsgcGFkZGluZzogNHB4OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+JyArXHJcbiAgICAnICA8c3Bhbj4nICtcclxuICAgICcgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5TS0lMTF9OQU1FPC9kaXY+JyArXHJcbiAgICAnICAgIDxkaXY+JyArXHJcbiAgICAnICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiLz4nICtcclxuICAgICcgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2tpbGxzL1NLSUxMLnBuZ1wiIHdpZHRoPVwiMzBweFwiLz4nICtcclxuICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAnICA8L3NwYW4+JyArXHJcbiAgICAnPC9sYWJlbD4nO1xyXG5cclxudmFyIEZJTFRFUl9USVRMRSA9XHJcbiAgICAnPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZDogbGlnaHRncmF5OyB3aWR0aDogMTAwJTsgZGlzcGxheTogYmxvY2s7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1wiPicgK1xyXG4gICAgJzxiPlRJVExFX05BTUU8L2I+JyArXHJcbiAgICAnPC9kaXY+JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsRmlsdGVyIHtcclxuXHJcbiAgICBwcml2YXRlIGZpbHRlckNoYW5nZWRDYWxsYmFjazogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIG1vZGVsOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ2hhbmdlZENhbGxiYWNrID0gcGFyYW1zLmZpbHRlckNoYW5nZWRDYWxsYmFjaztcclxuICAgICAgICB0aGlzLm1vZGVsID0ge1xyXG4gICAgICAgICAgICBhbmRyb2lkOiBmYWxzZSxcclxuICAgICAgICAgICAgY3NzOiBmYWxzZSxcclxuICAgICAgICAgICAgaHRtbDU6IGZhbHNlLFxyXG4gICAgICAgICAgICBtYWM6IGZhbHNlLFxyXG4gICAgICAgICAgICB3aW5kb3dzOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZ2V0R3VpKCkge1xyXG4gICAgICAgIHZhciBlR3VpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZUd1aS5zdHlsZS53aWR0aCA9ICczODBweCc7XHJcbiAgICAgICAgdmFyIGVJbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlSW5zdHJ1Y3Rpb25zLmlubmVySFRNTCA9IEZJTFRFUl9USVRMRS5yZXBsYWNlKCdUSVRMRV9OQU1FJywgJ0N1c3RvbSBTa2lsbHMgRmlsdGVyJyk7XHJcbiAgICAgICAgZUd1aS5hcHBlbmRDaGlsZChlSW5zdHJ1Y3Rpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICBSZWZEYXRhLklUX1NLSUxMUy5mb3JFYWNoKGZ1bmN0aW9uIChza2lsbCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIHNraWxsTmFtZSA9IFJlZkRhdGEuSVRfU0tJTExTX05BTUVTW2luZGV4XTtcclxuICAgICAgICAgICAgdmFyIGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9IFNLSUxMX1RFTVBMQVRFLnJlcGxhY2UoXCJTS0lMTF9OQU1FXCIsIHNraWxsTmFtZSkucmVwbGFjZShcIlNLSUxMXCIsIHNraWxsKTtcclxuICAgICAgICAgICAgZVNwYW4uaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBlQ2hlY2tib3ggPSA8SFRNTElucHV0RWxlbWVudD4gZVNwYW4ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICAgICAgZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5tb2RlbFtza2lsbF0gPSBlQ2hlY2tib3guY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIHRoYXQuZmlsdGVyQ2hhbmdlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZUd1aS5hcHBlbmRDaGlsZChlU3Bhbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlR3VpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGRvZXNGaWx0ZXJQYXNzKHBhcmFtcykge1xyXG5cclxuICAgICAgICB2YXIgcm93U2tpbGxzID0gcGFyYW1zLmRhdGEuc2tpbGxzO1xyXG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgdmFyIHBhc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIFJlZkRhdGEuSVRfU0tJTExTLmZvckVhY2goZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbFtza2lsbF0pIHtcclxuICAgICAgICAgICAgICAgIGlmICghcm93U2tpbGxzW3NraWxsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXNzZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgaXNGaWx0ZXJBY3RpdmUoKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICB2YXIgc29tZXRoaW5nU2VsZWN0ZWQgPSBtb2RlbC5hbmRyb2lkIHx8IG1vZGVsLmNzcyB8fCBtb2RlbC5odG1sNSB8fCBtb2RlbC5tYWMgfHwgbW9kZWwud2luZG93cztcclxuICAgICAgICByZXR1cm4gc29tZXRoaW5nU2VsZWN0ZWQ7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
