# Node App K8s

A simple Node.js Express application deployed on Kubernetes.

## Description

This project demonstrates a basic Express.js server that responds with a greeting including the pod's hostname, showcasing Kubernetes pod identification.

## Prerequisites

- Node.js (version 20 or later)
- Docker
- Kubernetes cluster (e.g., Minikube)
- kubectl

## Local Development

1. Navigate to the app directory:
   ```
   cd app/
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

4. Access at http://localhost:3000

## Docker Build

1. Build the Docker image:
   ```
   cd app/
   docker build . -t your-registry/node-app:latest 
   ```

2. Push to registry (replace with your registry):
   ```
   docker push your-registry/node-app:latest
   ```
## Docker Push to Registry

1. Docker Login
```
docker login
```

2. Push image to DockerHub
```
docker push your-registry/k8s-node-app:<Tag>
```

## Kubernetes Deployment

1. Apply the deployment:
   ```
   kubectl apply -f app-deployment.yml
   ```

2. Apply the service:
   ```
   kubectl apply -f app-service.yml
   ```
   
3. Test the service:
   ```
   minikube service node-app-service
   ```

4. Access the Application:
   ```
   minikube ip
   #192.168.49.2
   curl http://192.168.49.2:30080
   ```

## Testing

![Test Screenshot](test.png)

Note: Update the image tag in app-deployment.yml to your built image.

## Apply Rolling Updates

1. Update your App & Re-build your image with new tag
2. Update Deployment:
```
kubectl set image deployment node-app-deployment node-app=ibrahimmintal/k8s-node-app:v1.0.1
```
3. Check Rollout Status:
```
kubectl rollout status deployment node-app-deployment
```
4. Test again
```
minikube service node-app-service
curl http://192.168.49.2:30080
```
---   