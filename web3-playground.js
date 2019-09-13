cte_model_buyer_1           | 2019-09-12 03:36:41,492 INFO - Finish model with status FINISHED
cte_model_buyer_1           | 2019-09-12 03:36:41,495 ERROR - 'metrics'
cte_model_buyer_1           | 2019-09-12 03:36:41,495 ERROR - Exception on /models/636e8f66-d50e-11e9-8246-0242ac120003 [PUT]
cte_model_buyer_1           | Traceback (most recent call last):
cte_model_buyer_1           |   File "/root/.local/lib/python3.7/site-packages/flask/app.py", line 1832, in full_dispatch_request
cte_model_buyer_1           |     rv = self.dispatch_request()
cte_model_buyer_1           |   File "/root/.local/lib/python3.7/site-packages/flask/app.py", line 1818, in dispatch_request
cte_model_buyer_1           |     return self.view_functions[rule.endpoint](**req.view_args)
cte_model_buyer_1           |   File "/root/.local/lib/python3.7/site-packages/flask_restplus/api.py", line 325, in wrapper
cte_model_buyer_1           |     resp = resource(*args, **kwargs)
cte_model_buyer_1           |   File "/root/.local/lib/python3.7/site-packages/flask/views.py", line 88, in view
cte_model_buyer_1           |     return self.dispatch_request(*args, **kwargs)
cte_model_buyer_1           |   File "/root/.local/lib/python3.7/site-packages/flask_restplus/resource.py", line 44, in dispatch_request
cte_model_buyer_1           |     resp = meth(*args, **kwargs)
cte_model_buyer_1           |   File "/app/model_buyer/resources/models_resource.py", line 123, in put
cte_model_buyer_1           |     ModelBuyerService().finish_model(model_id, data)
cte_model_buyer_1           |   File "/app/model_buyer/services/model_buyer_service.py", line 75, in finish_model
cte_model_buyer_1           |     model = self._update_model(model_id, data, BuyerModelStatus.FINISHED.name)
cte_model_buyer_1           |   File "/app/model_buyer/services/model_buyer_service.py", line 104, in _update_model
cte_model_buyer_1           |     diffs = data['metrics']['diffs']
cte_model_buyer_1           | KeyError: 'metrics'


DO-10
FA-12
MB-30